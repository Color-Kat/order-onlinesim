<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('country_service', function (Blueprint $table) {
            $table->id();

            $table->string('service_short_name');
            $table->string('country_short_name');
            $table->foreign('service_short_name')->references('short_name')->on('services');
            $table->foreign('country_short_name')->references('short_name')->on('countries');

            $table->unsignedFloat('price');
            $table->unsignedInteger('availablePhones');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('country_service');
    }
};
