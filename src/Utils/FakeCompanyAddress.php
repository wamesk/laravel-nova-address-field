<?php

namespace Wame\LaravelNovaAddressField\Utils;

use Wame\LaravelNovaAddressField\Casts\AddressCast;
use Wame\LaravelNovaAddressField\Enums\IsCompanyEnum;

class FakeCompanyAddress
{
    public static function make(array $data = [], bool $withLatLng = false): AddressCast
    {
        $data = array_replace(FakeAddress::make(withName: false, withLatLng: $withLatLng)->toArray(), $data);

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
