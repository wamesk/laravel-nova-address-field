# Laravel Nova Addresss field

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

## Repeatable field

Package is also compatible with [Nova repeatable field](https://nova.laravel.com/docs/4.0/resources/repeater-fields.html)

```php
Repeater::make('Address', 'address')
    ->repeatables([\Wame\Address\Fields\AddressRepeater::make()])
    ->asJson()
```
