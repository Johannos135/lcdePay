<?php

namespace App\Providers;

use App\Auth\LcdeGuard;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;


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
        //
        Auth::extend('lcde', function ($app, $name, array $config) {
            return new LcdeGuard(Auth::createUserProvider($config['provider']), $app->make('session.store'));
        });
    }
}
