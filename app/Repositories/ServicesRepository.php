<?php

namespace App\Repositories;

use App\Models\Country;
use App\Models\Service;
use Exception;

class ServicesRepository
{
    /**
     * Retrieves all services with associated countries.
     *
     * @return array The list of services
     */
    public function getAllServicesWithCountries()
    {
        $services = Service::query()
                           ->orderBy('name')
                           ->with('countries')
                           ->get()
        ;

        $countries = Country::query()
                            ->select('id', 'name', 'short_name', 'code', 'image')
                            ->orderBy('name')
                            ->where('is_active', true)
                            ->get()
        ;

        return [
            'services'  => $services,
            'countries' => $countries
        ];
    }

    /**
     * Creates a new service with attached by default all countries.
     *
     * @param array $data The data for creating the service.
     * @return Service The newly created service.
     * @throws Exception If there is an error creating the service.
     */
    public function createService($data)
    {
        // Create service
        $service = Service::create($data);

        // Attach ALL countries to the new service with default price and zero availablePhones
        $countries = Country::pluck('short_name');
        $service->countries()->attach($countries, [
            'price'           => $data['default_price'],
            'availablePhones' => 0
        ]);

        // Store image of the service
        if ($data['image'])
            $service->updateImage($data['image'], 'services');

        return $service;
    }

    public function updateService($data)
    {
        // Get service by id
        $service = Service::query()->find($data['id']);

        // Detach all service countries because we will change short_name attribute value
        $service->countries()->detach();

        $service->is_active = (bool)$data['is_active'];
        $service->name = $data['name'];
        $service->short_name = $data['short_name'];

        // Save changes
        $service->save();

        // Update image if image is file but not a string
        if ($data['image'] instanceof \Illuminate\Http\UploadedFile)
            $service->updateImage($data['image'], 'services');

        // Get data for attaching countries
        // 1. Get only array values (delete keys that is country is, we have relationship by short_name)
        // 2. Retrieve only is_active, country_short_name and price fields
        $serviceCountries = array_map(function ($country) {
            return [
                'is_active' => (bool) $country['is_active'],
                'country_short_name' => $country['short_name'],
                'price' => $country['price'],
            ];
        }, array_values($data['countries']));

        // Attach all countries again
        $service->countries()->attach($serviceCountries);

        return $service;
    }

    public function deleteService($id)
    {
        $result = Service::query()
                         ->where('id', $id)
                         ->delete()
        ;

        return $result;
    }
}