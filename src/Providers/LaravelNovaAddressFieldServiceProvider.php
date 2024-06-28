<?php

declare(strict_types = 1);

namespace Wame\Address\Providers;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class LaravelNovaAddressFieldServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->publishes([
            __DIR__ . '/../../resources/lang-public/' => resource_path('lang/'),
            __DIR__ . '/../../resources/views/' => resource_path('views/vendor/wamesk/laravel-nova-address-field/'),
        ], 'wamesk/laravel-nova-address-field');

        Nova::serving(function (ServingNova $event): void {
            Nova::style('address', __DIR__ . '/../../dist/css/field.css');
            Nova::script('address', __DIR__ . '/../../dist/js/field.js');
            Nova::translations(__DIR__ . '/../../resources/lang/' . app()->getLocale() . '.json');
            Nova::provideToScript(['google_maps_api_key' => env('GOOGLE_MAPS_API_KEY')]);
        });
    }

    public function boot(): void
    {
    }
}
