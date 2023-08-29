<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Services\CreateServiceRequest;
use App\Repositories\ServicesRepository;
use Illuminate\Http\Request;


class ServicesController extends Controller
{
    public function __construct(
        private ServicesRepository $servicesRepository
    )
    {

    }

    public function index()
    {
//        $services = $this->servicesRepository->getAllServicesWithCountries();
//
//        return apiResponse([
//            'data' => $services,
//        ], 200);
    }

    public function create(CreateServiceRequest $request) {
        try {
            dd($request->all());
//            $service = $this->servicesRepository->createService($request->all());

            return apiResponse([
                'data' => $service,
                'message' => 'Service created successfully'
            ], 201);
        } catch (\Exception $e) {
            return apiResponse([
                'status' => 'error',
                'message' => 'Failed to create service',
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
