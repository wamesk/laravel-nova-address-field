<?php

namespace Wame\LaravelNovaAddressField\Cards;

use InteractionDesignFoundation\HtmlCard\HtmlCard;
use Wame\LaravelNovaAddressField\Casts\AddressCast;

class AddressCard
{
    public static function make(
        string $title,
        ?AddressCast $address,
        ?string $editUrl = null,
        ?string $noAddressText = null,
        ?string $noAddressButtonText = null,
    ): HtmlCard {
        /** @var HtmlCard $htmlCard */
        $htmlCard = resolve(HtmlCard::class);

        return $htmlCard->width('1/3')
            ->view('vendor.wamesk.laravel-nova-address-field.address_card', [
                'title' => $title,
                'address' => $address,
                'editUrl' => $editUrl,
                'noAddressText' => $noAddressText,
                'noAddressButtonText' => $noAddressButtonText,
            ]);
    }
}
