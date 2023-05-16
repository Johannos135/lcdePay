<?php

namespace App\Providers;

use App\Lcdepay\Services\LcdePay;
use Illuminate\Support\ServiceProvider;

class LcdePayServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton("LcdePay", function () {
            return new LcdePay();
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
