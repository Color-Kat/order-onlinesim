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
        $countries = Service::query()
            ->orderBy('name')
            ->get();

        return $countries;
    }

    /**
     * Creates a new service with attached by default all countries.
     *
     * @param array $data The data for creating the service.
     * @throws Exception If there is an error creating the service.
     * @return Service The newly created service.
     */
    public function createService($data) {
        $country = Service::create($data);

        return $country;
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