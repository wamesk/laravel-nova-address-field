<div class="flex flex-col">
    <div class="flex flex-row">
        <div class="flex-1 w-50">
            <h2 class="text-primary-500 font-bold mb-3">{{ $title }}</h2>
        </div>
        @if(isset($editUrl) && isset($address))
            <div class="flex-1 w-50">
                <div class="block mb-3 text-right">
                    <a class="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring component-inertia-link" href="{{ $editUrl }}">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" class="inline-block component-heroicons-outline-pencil-alt component-icon" role="presentation"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </a>
                </div>
            </div>
        @endif
    </div>
    @if (isset($address))
        <div class="flex">
            <div class="flex-1 w-50 flex flex-col">
                <span><strong>{{ $address->getName() }}</strong></span>
                <span>{{ $address->getStreet() }}</span>
                <span>{{ $address->getZipCode() }} {{ $address->getCity() }}</span>
                <span>{{ $address->getCountryTitle() }}</span>
            </div>
            <div class="flex-1 w-50 flex flex-col">
                @if ($address->getBusinessId()) <span>{{ __('business_id') }}: {{ $address->getBusinessId()}}</span> @endif
                @if ($address->getTaxId()) <span>{{ __('tax_id') }}: {{ $address->getTaxId()}}</span> @endif
                @if ($address->getVatId()) <span>{{ __('vat_id') }}: {{ $address->getVatId()}}</span> @endif
                @if ($address->getPhone()) <span>{{ __('phone') }}: {{ $address->getPhone()}}</span> @endif
            </div>
        </div>
    @else
        <div class="text-center">
            @if (isset($noAddressText)) <p>{{ $noAddressText }}</p> @endif
            @if (isset($noAddressButtonText) && $editUrl)
                <a class="nova-button nova-button cursor-pointer rounded-full border-2 px-3 py-1 font-bold btn btn-outline-gray nova-button-address cursor-pointer inline-block text-gray-50 text-black font-bold" href="{{ $editUrl }}">
                    {{ $noAddressButtonText }}
                </a>
            @endif
            @if (!isset($noAddressText) && (!isset($noAddressButtonText) || !isset($editUrl)))
                {{ __('no_address') }}
            @endif
        </div>
    @endif
</div>
