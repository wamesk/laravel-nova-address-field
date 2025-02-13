# Laravel Nova Address field

- Save address in one JSON database column
- Personal or business address
- Google Maps Autocomplete

## Requirements

- `laravel/nova: ^5.0`


## Installation

```bash
composer require wamesk/laravel-nova-address-field
```


## Usage

```php
Address::make(__('customer.field.address'), 'address')
```

### Settings

| Parameter                           | Description                                            |
|-------------------------------------|--------------------------------------------------------|
| `countryList(['sk' => 'Slovakia'])` | Custom country list                                    |
| `onlyCompany()`                     | Show only company address                              |
| `withoutCompany()`                  | Show only personal address                             |
| `withoutAddressSuggestions()`       | Without address suggestions if set Google Maps API key |
| `defaultShowCompany()`              | Show default company tab                               |
| `withoutName()`                     | Without personal user name                             |
| `withPhone()`                       | Show phone input                                       |
| `withGPS()`                         | Show latitude and longitude inputs                     |

```php
Address::make(__('customer.field.address'), 'address')
    ->withoutCompany()
    ->withoutName()
    ->withGPS()
```

### Cast
Setting casts in model

```php
use Wame\Address\Casts\AddressCast;

protected function casts(): array
{
    return [
        'address' => AddressCast::class,
    ];
}
```

In one model, there can be more address columns

```php
protected function casts(): array
{
    return [
        'billing_address' => AddressCast::class,
        'shipping_address' => AddressCast::class,
    ];
}
```

### Attributes

```php
$this->address->firstName; // John
$this->address->lastName; // Doe
$this->address->getName(); // John Doe
$this->address->street; // Baker street 3
$this->address->zipCode; // 08501
$this->address->city; // New York
$this->address->country; // SK
$this->address->getCountryTitle(); // Slovakia
$this->address->getCountryData();

$this->billing_address->isCompany; // true|false
$this->billing_address->companyName; // Apple Inc.
$this->billing_address->getName(); // Apple Inc.
$this->billing_address->businessId;
$this->billing_address->taxId;
$this->billing_address->vatId;
$this->billing_address->vatPayer; // true|false

$this->addess->phone;

$this->addess->latitude;
$this->addess->longitude;

$this->address->isComplete(); // true|false

$this->address->toArray();
$this->address->toJson();
```

## Repeatable field
Package is also compatible with [Nova repeatable field](https://nova.laravel.com/docs/4.0/resources/repeater-fields.html)

```php
Repeater::make('Address', 'address')
    ->repeatables([\Wame\Address\Fields\AddressRepeater::make()])
    ->asJson()
```


## Google address autocomplete
If you add the Google Maps API key from [https://console.cloud.google.com/]() to the `.env`, you can search for addresses

```dotenv
GOOGLE_MAPS_API_KEY="AIza..."
```

It also stores the place coordinates `latitude` and `longitude`.



## Helper
Helpers for preparing a fake address, returned AddressCast

```php
\Wame\Address\Utils\FakeAddress::make();
\Wame\Address\Utils\FakeCompanyAddress::make();

\Wame\Address\Utils\FakeAddress::make(['country' => 'SK']);
\Wame\Address\Utils\FakeAddress::make(withName: false);

\Wame\Address\Utils\FakeAddress::make()->toArray();
\Wame\Address\Utils\FakeAddress::make()->toJson();
```