<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Countries\CreateCountryRequest;
use App\Repositories\CountriesRepository;
use Illuminate\Http\Request;


class CountriesController extends Controller
{
    public function __construct(
        private CountriesRepository $countriesRepository
    )
    {
//        parent::__construct();
    }

    public function index()
    {
        $countries = $this->countriesRepository->getAllCountries();

        return apiResponse([
            'data' => $countries,
        ], 200);
    }

    public function create(CreateCountryRequest $request) {
        try {
            $country = $this->countriesRepository->createCountry($request->all());

            return apiResponse([
                'data' => $country,
                'message' => 'Country created successfully'
            ], 201);
        } catch (\Exception $e) {
            return apiResponse([
                'status' => 'error',
                'message' => 'Failed to create country',
                'errors' => [
                    'exception' => $e->getMessage()
                ]
            ], 500);
        }
    }
}
