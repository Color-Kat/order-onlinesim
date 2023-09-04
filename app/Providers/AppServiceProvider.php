<?php

namespace App\Providers;

use App\Models\Wallet;
use App\Observers\WalletObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Wallet::observe(WalletObserver::class);
    }
}
