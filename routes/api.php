<?php

use App\Http\Controllers\Admin\CountriesController;
use App\Http\Controllers\Admin\ServicesController;
use App\Repositories\ServicesRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('role:admin')->prefix('admin')->as('admin.')->group(function() {
    Route::get('countries', [CountriesController::class, 'index'])->name('countries');

    Route::prefix('countries')->as('countries.')->group(function () {
        Route::post('create', [CountriesController::class, 'create'])->name('create');
        Route::put('update', [CountriesController::class, 'update'])->name('update');
        Route::delete('delete', [CountriesController::class, 'delete'])->name('delete');
    });

    Route::prefix('services')->as('services.')->group(function () {
        Route::post('create', [ServicesController::class, 'create'])->name('create');
        Route::put('update', [ServicesController::class, 'update'])->name('update');
        Route::delete('delete', [ServicesController::class, 'delete'])->name('delete');
    });

});
