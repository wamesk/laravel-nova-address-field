# Laravel Nova Address field

- Save address in one JSON database column
- Personal or business address
- Google Maps Autocomplete

## Requirements

- `laravel/nova: ^4.0`


## Installation

```bash
composer require wamesk/laravel-nova-address
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


## Repeatable field

Package is also compatible with [Nova repeatable field](https://nova.laravel.com/docs/4.0/resources/repeater-fields.html)

```php
Repeater::make('Address', 'address')
    ->repeatables([\Wame\Address\Fields\AddressRepeater::make()])
    ->asJson()
```


## Google address autocomplete
If you add the Google Maps API key to the .env, you can search for addresses

```dotenv
GOOGLE_MAPS_API_KEY="AIza..."
```
