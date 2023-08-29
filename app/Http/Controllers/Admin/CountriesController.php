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

    public function update(Request $request) {
        try {
            $country = $this->countriesRepository->updateCountry($request->all());

            return apiResponse([
                'data' => $country,
                'message' => 'Country updated successfully'
            ], 201);
        } catch (\Exception $e) {
            return apiResponse([
                'status' => 'error',
                'message' => 'Failed to update country',
                'errors' => [
                    'exception' => $e->getMessage()
                ]
            ], 500);
        }
    }

    public function delete(Request $request) {
        try {
            $country = $this->countriesRepository->deleteCountry($request->get('id'));

            return apiResponse([
                'data' => $country,
                'message' => 'Country successfully deleted'
            ], 201);
        } catch (\Exception $e) {
            return apiResponse([
                'status' => 'error',
                'message' => 'Failed to delete country',
                'errors' => [
                    'exception' => $e->getMessage()
                ]
            ], 500);
        }
    }
}
