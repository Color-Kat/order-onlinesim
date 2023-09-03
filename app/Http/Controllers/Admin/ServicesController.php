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
        $services = $this->servicesRepository->getAllServicesWithCountries();

        return apiResponse([
            'data' => $services,
        ], 200);
    }

    public function create(CreateServiceRequest $request) {
        try {
            $service = $this->servicesRepository->createService($request->all());

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
            $service = $this->servicesRepository->updateService($request->all());

            return apiResponse([
                'data' => $service,
                'message' => 'Service updated successfully'
            ], 201);
        } catch (\Exception $e) {
            return apiResponse([
                'status' => 'error',
                'message' => 'Failed to update service',
                'errors' => [
                    'exception' => $e->getMessage()
                ]
            ], 500);
        }
    }

    public function delete(Request $request) {
        try {
            $country = $this->servicesRepository->deleteService($request->get('id'));

            return apiResponse([
                'data' => $country,
                'message' => 'Service successfully deleted'
            ], 201);
        } catch (\Exception $e) {
            return apiResponse([
                'status' => 'error',
                'message' => 'Failed to delete service',
                'errors' => [
                    'exception' => $e->getMessage()
                ]
            ], 500);
        }
    }
}
