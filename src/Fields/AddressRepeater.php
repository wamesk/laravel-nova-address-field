<?php

namespace Wame\Address\Fields;

use Laravel\Nova\Fields\Repeater\Repeatable;
use Laravel\Nova\Http\Requests\NovaRequest;

class AddressRepeater extends Repeatable
{
    /**
     * Get the fields displayed by the repeatable.
     *
     * @param NovaRequest $request
     * @return array
     */
    public function fields(NovaRequest $request): array
    {
        return [
            Address::make(__('address.singular'), 'address'),
        ];
    }
}
