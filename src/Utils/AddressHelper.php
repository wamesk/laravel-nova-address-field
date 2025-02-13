<?php

namespace Wame\LaravelNovaAddressField\Utils;

use Wame\LaravelNovaAddressField\Casts\AddressCast;
use Wame\LaravelNovaAddressField\Enums\IsCompanyEnum;

class AddressHelper
{
    public static function fakeAddress(array $data = [], bool $withName = true, bool $withLatLng = false): AddressCast
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

    public static function fakeCompanyAddress(array $data = [], bool $withLatLng = false): AddressCast
    {
        $data = array_replace(self::fakeAddress(withName: false, withLatLng: $withLatLng)->toArray(), $data);

        $data['company'] = IsCompanyEnum::YES->value;

        if (!isset($data['company_name'])) {
            $data['company_name'] = fake()->company();
        }
        if (!isset($data['business_id'])) {
            $data['business_id'] = fake()->numerify('########');
        }
        if (!isset($data['tax_id'])) {
            $data['tax_id'] = fake()->numerify('##########');
        }
        if (!isset($data['vat_id'])) {
            $data['vat_id'] = $data['country'] . $data['tax_id'];
        }

        return new AddressCast($data);
    }
}
