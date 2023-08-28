<?php

use App\Http\Controllers\Admin\CountriesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('role:admin')->prefix('admin')->as('admin.')->group(function() {
    Route::get('countries', [CountriesController::class, 'index'])->name('countries');
    Route::post('countries/create', [CountriesController::class, 'create'])->name('countries.create');
});
