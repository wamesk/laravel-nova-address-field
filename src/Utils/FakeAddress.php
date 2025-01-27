<?php

namespace Wame\LaravelNovaAddressField\Utils;

use Wame\LaravelNovaAddressField\Casts\AddressCast;

class FakeAddress
{
    public static function make(array $data = [], bool $withName = true, bool $withLatLng = false): AddressCast
    {
        if (!isset($data['first_name']) && $withName) {
            $data['first_name'] = fake()->firstName();
        }
        if (!isset($data['last_name']) && $withName) {
            $data['last_name'] = fake()->lastName();
        }

        if (!isset($data['street'])) {
            $data['street'] = fake()->streetAddress();
        }
        if (!isset($data['city'])) {
            $data['city'] = fake()->city();
        }
        if (!isset($data['zip_code'])) {
            $data['zip_code'] = fake()->postcode();
        }
        if (!isset($data['country'])) {
            $data['country'] = fake()->countryCode();
        }

        if (!isset($data['latitude']) && $withLatLng) {
            $data['latitude'] = fake()->latitude();
        }
        if (!isset($data['longitude']) && $withLatLng) {
            $data['longitude'] = fake()->longitude();
        }

        return new AddressCast($data);
    }

}
