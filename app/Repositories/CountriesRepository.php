<?php

namespace App\Repositories;

use App\Models\Country;
use Exception;

class CountriesRepository {
    /**
     * Retrieves all countries.
     *
     * @return array The list of countries
     */
    public function getAllCountries() {
        $countries = Country::all();

        return $countries;
    }

    /**
     * Creates a new country.
     *
     * @param array $data The data for creating the country.
     * @throws Exception If there is an error creating the country.
     * @return Country The newly created country.
     */
    public function createCountry($data) {
        $country = Country::create($data);

        return $country;
    }
}