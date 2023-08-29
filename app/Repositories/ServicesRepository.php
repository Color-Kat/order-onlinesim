<?php

namespace App\Repositories;

use App\Models\Country;
use App\Models\Service;
use Exception;

class ServicesRepository {
    /**
     * Retrieves all services with associated countries.
     *
     * @return array The list of services
     */
    public function getAllServicesWithCountries() {
        $services = Service::query()
            ->orderBy('name')
            ->with('countries')
            ->get();

        return $services;
    }

    /**
     * Creates a new service with attached by default all countries.
     *
     * @param array $data The data for creating the service.
     * @throws Exception If there is an error creating the service.
     * @return Service The newly created service.
     */
    public function createService($data) {
        // Create service
        $service = Service::create($data);

        // Attach ALL countries to the new service with default price and zero availablePhones
        $countries = Country::pluck('short_name');
        $service->countries()->attach($countries, [
            'price' => $data['default_price'],
            'availablePhones' => 0
        ]);

        // Store image of the service
        if ($data['image'])
            $service->updateImage($data['image'], 'services');

        return $service;
    }

    public function updateService($data) {
        $country = Service::query()
            ->where('id', $data['id'])
            ->update($data)
        ;

        dd($country);

        return $country;
    }

    public function deleteService($id) {
        $result = Service::query()
            ->where('id', $id)
            ->delete();

        return $result;
    }
}