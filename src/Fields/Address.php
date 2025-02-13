<?php

declare(strict_types = 1);

namespace Wame\LaravelNovaAddressField\Fields;

use Exception;
use Illuminate\Support\Str;
use Laravel\Nova\Fields\Field;
use Laravel\Nova\Fields\SupportsDependentFields;
use Rinvex\Country\CountryLoader;
use Wame\LaravelNovaAddressField\Casts\AddressCast;

class Address extends Field
{
    use SupportsDependentFields;

    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'address';

    protected $dependentShouldEmitChangesEvent = true;

    public function __construct($name, $attribute = null, callable $resolveCallback = null)
    {
        parent::__construct($name, $attribute, $resolveCallback);

        $this->dependentShouldEmitChangesEvent = true;

        $this->withMeta([
            'default_company' => '0',
            'google_maps_api_key' => env('GOOGLE_MAPS_API_KEY'),
            'only_company' => false,
            'with_address_suggestions' => true,
            'with_company' => true,
            'with_company_autocomplete' => true,
            'with_name' => true,
            'with_phone' => false,
            'with_gps' => false,
        ]);

        if (!isset($this->meta['country_list'])) {
            $countryList = $this->getCountryList();
            $this->withMeta(['country_list' => $countryList]);
        }
    }

    public function jsonSerialize(): array
    {
        $return = parent::jsonSerialize();

        if ($return['value'] instanceof AddressCast) {
            $return['value'] = $return['value']->toJson();
        }

        if (!isset($return['value'])) {
            $return['value'] = [];
        }

        return $return;
    }

    /**
     * Add custom country list
     * e.g. ['US' => 'United States', 'CA' => 'Canada']
     */
    public function countryList(array $countryList): Address
    {
        return $this->withMeta(['country_list' => $countryList]);
    }

    /**
     * Show only company address
     */
    public function onlyCompany(): Address
    {
        return $this->withMeta(['only_company' => true, 'default_company' => '1']);
    }

    /**
     * Show only personal address
     */
    public function withoutCompany(): Address
    {
        return $this->withMeta(['with_company' => false]);
    }

    /**
     * Disable address suggestions via Google Maps API
     */
    public function withoutAddressSuggestions(): Address
    {
        return $this->withMeta(['with_address_suggestions' => false]);
    }

    /**
     * Disable company autocomplete via VIES
     */
    public function withoutCompanyAutocomplete(): Address
    {
        return $this->withMeta(['with_company_autocomplete' => false]);
    }

    /**
     * Default show company tab
     */
    public function defaultShowCompany(): Address
    {
        return $this->withMeta(['default_company' => '1']);
    }

    /**
     * Hides name inputs
     */
    public function withoutName(): Address
    {
        return $this->withMeta(['with_name' => false]);
    }

    /**
     * Show phone input
     */
    public function withPhone(): Address
    {
        return $this->withMeta(['with_phone' => true]);
    }

    /**
     * Show latitude and longitude inputs
     */
    public function withGPS(): Address
    {
        return $this->withMeta(['with_gps' => true]);
    }

    /**
     * @return array
     * @throws \Rinvex\Country\CountryLoaderException
     */
    private function getCountryList(): array
    {
        $return = [];

        $list = CountryLoader::countries();
        foreach ($list as $item) {
            $country = country($item['iso_3166_1_alpha2']);
            $countryCode = $country->getIsoAlpha2();

            $return[$countryCode] = $country->getName() . ' (' . $countryCode . ')';
        }

        return $return;
    }
}
