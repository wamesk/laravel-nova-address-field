<?php

declare(strict_types = 1);

namespace Wame\Address\Fields;

use Exception;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Laravel\Nova\Fields\Field;
use Laravel\Nova\Fields\SupportsDependentFields;
use Wame\Address\Casts\AddressCast;
use Wame\LaravelNovaCountry\Enums\CountryStatusEnum;
use Wame\LaravelNovaCountry\Models\Country;

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

    private string $countryListCacheKey = 'address-field-countries';

    /**
     * @throws \JsonException
     */
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
        ]);

        if (!isset($this->meta['country_list'])) {
            $this->withMeta(['country_list' => $this->getCountryList()]);
        }
    }

    /**
     * @throws \JsonException
     */
    private function getCountryList(): ?array
    {
        $countries = Cache::get($this->countryListCacheKey);

        if (isset($countries)) {
            return $countries;
        }

        $version = $this->getCountryPackageVersion();

        if (Str::startsWith($version, ['2.', '4.'])) {
            $countries = Country::query()->where(['status' => CountryStatusEnum::ENABLED])->orderBy('title')->pluck('title', 'id')->toArray();

            $this->cacheCountryList($countries);

            return $countries;
        }

        $countries = Country::query()->where(['status' => Country::STATUS_ENABLED])->orderBy('title')->pluck('title', 'code')->toArray();

        $this->cacheCountryList($countries);

        return $countries;
    }

    private function cacheCountryList(array $countries): void
    {
        Cache::put($this->countryListCacheKey, $countries, now()->addSeconds(5));
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
     * @return mixed
     * @throws \JsonException
     * @throws Exception
     */
    public function getCountryPackageVersion(): mixed
    {
        $composerLockFile = base_path('composer.lock');
        $packageName = 'wamesk/laravel-nova-country';
        $composerData = json_decode(file_get_contents($composerLockFile), true, 512, JSON_THROW_ON_ERROR);

        foreach ($composerData['packages'] as $package) {
            if ($package['name'] === $packageName) {
                return $package['version'];
            }
        }

        throw new Exception('Package' . $packageName . 'not found');
    }
}
