<?php

declare(strict_types = 1);

namespace Wame\LaravelNovaAddressField\Casts;

use Illuminate\Contracts\Database\Eloquent\Castable;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Contracts\Database\Eloquent\SerializesCastableAttributes;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Database\Eloquent\Model;
use Rinvex\Country\Country;
use Wame\LaravelNovaAddressField\Enums\IsCompanyEnum;

class AddressCast implements Arrayable, Castable
{
    protected ?string $firstName;
    protected ?string $lastName;
    protected ?string $street;
    protected ?string $city;
    protected ?string $zipCode;
    protected ?string $country;
    protected IsCompanyEnum $isCompany;
    protected ?string $companyName;
    protected ?string $businessId;
    protected ?string $taxId;
    protected ?string $vatId;
    protected bool $vatPayer = false;
    protected ?string $phone;
    protected float|string|null $latitude;
    protected float|string|null $longitude;

    public function __construct(?array $data = [])
    {
        $this->firstName = $data['first_name'] ?? null;
        $this->lastName = $data['last_name'] ?? null;
        $this->street = $data['street'] ?? null;
        $this->city = $data['city'] ?? null;
        $this->zipCode = $data['zip_code'] ?? null;
        $this->country = $data['country'] ?? null;
        $this->isCompany = isset($data['company']) && $data['company'] ? IsCompanyEnum::from($data['company']) : IsCompanyEnum::NO;
        $this->companyName = $data['company_name'] ?? null;
        $this->businessId = $data['business_id'] ?? null;
        $this->taxId = $data['tax_id'] ?? null;
        $this->vatId = $data['vat_id'] ?? null;
        $this->phone = $data['phone'] ?? null;
        $this->latitude = $data['latitude'] ?? null;
        $this->longitude = $data['longitude'] ?? null;
    }

    public function __get(string $name): mixed
    {
        if (property_exists($this, $name)) {
            return $this->{$name};
        } elseif (method_exists($this, 'get' . ucfirst($name))) {
            return $this->{'get' . ucfirst($name)}();
        }

        return null;
    }

    public function __set(string $name, mixed $value): void
    {
        if (property_exists($this, $name)) {
            $this->{$name} = $value;
        }
    }

    public function __toString(): string
    {
        return $this->toJson();
    }

    public function toJson(): string
    {
        return json_encode($this->toArray());
    }

    public function toArray(): array
    {
        return [
            'first_name' => $this->firstName,
            'last_name' => $this->lastName,
            'street' => $this->street,
            'city' => $this->city,
            'zip_code' => $this->zipCode,
            'country' => $this->country,
            'company' => $this->isCompany?->value,
            'company_name' => $this->companyName,
            'business_id' => $this->businessId,
            'tax_id' => $this->taxId,
            'vat_id' => $this->vatId,
            'phone' => $this->phone,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
        ];
    }

    public static function castUsing(array $arguments): CastsAttributes|SerializesCastableAttributes
    {
        return new class() implements CastsAttributes, SerializesCastableAttributes
        {
            public function get(Model $model, string $key, mixed $value, array $attributes): ?AddressCast
            {
                if (null === $value || 'null' === $value) {
                    return null;
                }

                if (is_string($value)) {
                    if ('"' === $value[0]) {
                        $value = mb_substr($value, 1, -1);
                    }

                    $value = json_decode(stripslashes($value), true);
                }

                if (!isset($value['company_name']) && !isset($value['first_name']) && !isset($value['last_name'])) {
                    return null;
                }

                return new AddressCast($value);
            }

            public function set(Model $model, string $key, mixed $value, array $attributes): ?array
            {
                if (is_string($value)) {
                    $value = json_decode($value, true);
                } elseif (null === $value) {
                    return null;
                } else {
                    $value = $value->toArray();
                }

                // Normalize
                if (isset($value['zip_code'])) {
                    $value['zip_code'] = str_replace(' ', '', $value['zip_code']);
                }

                if (isset($value['phone'])) {
                    $value['phone'] = str_replace(' ', '', $value['phone']);
                }

                return [$key => json_encode($value)];
            }

            public function serialize(Model $model, string $key, mixed $value, array $attributes): string
            {
                return json_encode($value);
            }
        };
    }

    // Getters ************************************************************************************

    public function getName(): ?string
    {
        if (IsCompanyEnum::YES === $this->isCompany) {
            return $this->companyName;
        }

        return $this->firstName . ' ' . $this->lastName;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function getStreet(): ?string
    {
        return $this->street;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function getZipCode(): ?string
    {
        return $this->zipCode;
    }

    public function getCountryCode(): ?string
    {
        return $this->country;
    }

    public function getCountryTitle(): ?string
    {
        return $this->country ? country($this->country)->getName() : null;
    }

    public function getCountryData(): ?Country
    {
        return $this->country ? country($this->country) : null;
    }

    public function getIsCompany(): IsCompanyEnum
    {
        return $this->isCompany;
    }

    public function getCompanyName(): ?string
    {
        return $this->companyName;
    }

    public function getBusinessId(): ?string
    {
        return $this->businessId;
    }

    public function getTaxId(): ?string
    {
        return $this->taxId;
    }

    public function getVatId(): ?string
    {
        return $this->vatId;
    }

    public function getVatPayer(): bool
    {
        return '' !== $this->vatId && null !== $this->vatId;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function getLatitude(): ?string
    {
        return $this->latitude;
    }

    public function getLongitude(): ?string
    {
        return $this->longitude;
    }

    public function isComplete(): bool
    {
        return (bool) (
            ((IsCompanyEnum::YES === $this->getIsCompany() && $this->companyName)
            || (IsCompanyEnum::NO === $this->getIsCompany() && $this->firstName && $this->lastName))
            && ($this->street && $this->zipCode && $this->city && $this->country)
        );
    }

    // Setters ************************************************************************************

    public function setFirstName(?string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function setLastName(?string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function setStreet(?string $street): self
    {
        $this->street = $street;

        return $this;
    }

    public function setCity(?string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function setZipCode(?string $zipCode): self
    {
        $this->zipCode = $zipCode;

        return $this;
    }

    public function setCountry(?string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function setIsCompany(IsCompanyEnum $isCompany): self
    {
        $this->isCompany = $isCompany;

        return $this;
    }

    public function setCompanyName(?string $companyName): self
    {
        $this->companyName = $companyName;

        return $this;
    }

    public function setBusinessId(?string $businessId): self
    {
        $this->businessId = $businessId;

        return $this;
    }

    public function setTaxId(?string $taxId): self
    {
        $this->taxId = $taxId;

        return $this;
    }

    public function setVatId(?string $vatId): self
    {
        $this->vatId = $vatId;

        return $this;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = str_replace(' ', '', $phone) ?? null;

        return $this;
    }

    public function setLatitude($latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function setLongitude($longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }
    
}
