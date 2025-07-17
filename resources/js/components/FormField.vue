<template>
    <DefaultField
        :field="currentField"
        :errors="errors"
        :show-help-text="showHelpText"
        :full-width-content="fullWidthContent"
    >
        <template #field>
            <div class="address-field-group">
                <div v-if="currentField.with_company && !currentField.only_company" class="radio-wrapper">
                    <label for="addr_personal">
                        <input
                            id="addr_personal"
                            type="radio"
                            class="checked:border-primary-500"
                            :class="errorClasses"
                            v-model="formData.company"
                            value="0"
                        >
                        {{ __('personal') }}
                    </label>

                    <label for="addr_company">
                        <input
                            id="addr_company"
                            type="radio"
                            class="peer/draft"
                            :class="errorClasses"
                            v-model="formData.company"
                            value="1"
                        >
                        {{ __('company') }}
                    </label>
                </div>

                <div v-if="showCompany && showName" class="input-wrapper">
                    <input
                        id="addr_company_name"
                        type="text"
                        class="w-full form-control form-input form-control-bordered"
                        :class="errorClasses"
                        :placeholder="__('company_name')"
                        v-model="formData.company_name"
                        :required="isRequired('company_name')"
                        autocomplete="off"
                    />
                </div>

                <div v-if="!showCompany && showName" class="name-row">
                    <div class="input-wrapper col">
                        <input
                            id="addr_first_name"
                            type="text"
                            class="w-full form-control form-input form-control-bordered"
                            :class="errorClasses"
                            :placeholder="__('first_name')"
                            v-model="formData.first_name"
                            :required="isRequired('first_name')"
                            autocomplete="off"
                        />
                    </div>

                    <div class="input-wrapper col">
                        <input
                            id="addr_last_name"
                            type="text"
                            class="w-full form-control form-input form-control-bordered"
                            :class="errorClasses"
                            :placeholder="__('last_name')"
                            v-model="formData.last_name"
                            :required="isRequired('last_name')"
                            autocomplete="off"
                        />
                    </div>
                </div>

                <div class="input-wrapper">
                    <GMapAutocomplete
                        v-if="currentField.with_address_suggestions && currentField.google_maps_api_key"
                        id="addr_drive_line"
                        type="text"
                        class="w-full form-control form-input form-control-bordered"
                        :class="errorClasses"
                        :placeholder="__('address_suggestions')"
                        :value="formData.street"
                        v-model="formData.street"
                        autocomplete="off"
                        :required="isRequired('street')"
                        @place_changed="addressSuggestions"
                        @keydown.enter.prevent
                    />

                    <input
                        v-else
                        id="addr_str_eet"
                        type="text"
                        class="w-full form-control form-input form-control-bordered"
                        :class="errorClasses"
                        :placeholder="__('street')"
                        v-model="formData.street"
                        :required="isRequired('street')"
                        autocomplete="off"
                    />
                </div>

                <div class="row">
                    <div class="input-wrapper col">
                        <input
                            id="addr_z_code"
                            type="text"
                            class="w-full form-control form-input form-control-bordered"
                            :class="errorClasses"
                            :placeholder="__('zip_code')"
                            v-model="formData.zip_code"
                            :required="isRequired('zip_code')"
                            autocomplete="off"
                        />
                    </div>

                    <div class="input-wrapper col">
                        <input
                            id="addr_cit_y"
                            type="text"
                            class="w-full form-control form-input form-control-bordered"
                            :class="errorClasses"
                            :placeholder="__('city')"
                            v-model="formData.city"
                            :required="isRequired('city')"
                            autocomplete="off"
                        />
                    </div>
                </div>

                <div class="flex relative w-full component-select-control select-wrapper">
                    <select
                        id="addr_country"
                        class="relative flex items-center form-control form-input form-control-bordered form-select pr-6 form-select-bordered"
                        :class="errorClasses"
                        v-model="formData.country"
                        :required="isRequired('country')"
                        autocomplete="off"
                    >
                        <option
                            disabled
                            :selected="formData.country === ''"
                            value=""
                            key="none"
                        >
                            - {{ __('country') }} -
                        </option>

                        <option
                            v-for="(countryTitle, countryCode) in currentField.country_list"
                            :value="countryCode"
                            :key="countryCode"
                        >
                            {{ countryTitle }}
                        </option>
                    </select>

                    <svg class="shrink-0 pointer-events-none form-select-arrow component-icon-arrow" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6"><path class="fill-current" d="M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"></path></svg>
                </div>

                <div v-show="showCompany" class="company-data">
                    <div class="row">
                        <div class="col">
                            <label for="addr_business_id">
                                {{ __('business_id') }}
                            </label>
                        </div>

                        <div class="input-wrapper col">
                            <input
                                id="addr_business_id"
                                type="text"
                                class="w-full form-control form-input form-control-bordered"
                                :class="errorClasses"
                                :placeholder="__('business_id')"
                                v-model="formData.business_id"
                                autocomplete="off"
                            />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <label for="addr_tax_id">
                                {{ __('tax_id') }}
                            </label>
                        </div>

                        <div class="input-wrapper col">
                            <input
                                id="addr_tax_id"
                                type="text"
                                class="w-full form-control form-input form-control-bordered"
                                :class="errorClasses"
                                :placeholder="__('tax_id')"
                                v-model="formData.tax_id"
                                autocomplete="off"
                            />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <label for="addr_vat_id">
                                {{ __('vat_id') }}
                            </label>
                        </div>

                        <div class="input-wrapper col">
                            <input
                                id="addr_vat_id"
                                type="text"
                                class="w-full form-control form-input form-control-bordered"
                                :class="errorClasses"
                                :placeholder="__('vat_id')"
                                v-model="formData.vat_id"
                                autocomplete="off"
                            />
                        </div>
                    </div>
                </div>

                <div v-if="currentField.with_phone" class="phone-row">
                    <div class="input-wrapper col">
                        <vue-tel-input
                            id="addr_phone"
                            v-model="formData.phone"
                            class="w-full form-control form-input form-control-bordered"
                            :class="errorClasses"
                            :placeholder="__('phone')"
                            :required="currentField.required"
                            autocomplete="off"
                        />
                    </div>
                </div>
            </div>
        </template>
    </DefaultField>
</template>

<script>
import { DependentFormField, HandlesValidationErrors } from 'laravel-nova'
import { getAddressFromPlace } from '../google-maps'
import { VueTelInput } from 'vue-tel-input';
import 'vue3-tel-input/dist/vue3-tel-input.css';

export default {
    mixins: [
        DependentFormField,
        HandlesValidationErrors,
    ],

    components: {
        VueTelInput
    },

    props: [
        'resourceName',
        'resourceId',
        'field',
    ],

    data() {
        return {
            formData: {
                first_name: '',
                last_name: '',
                street: '',
                zip_code: '',
                city: '',
                country: '',
                company: this.field.default_company ?? '0',
                company_name: '',
                business_id: '',
                tax_id: '',
                vat_id: '',
                phone: '',
                latitude: '',
                longitude: '',
            }
        }
    },

    watch: {
        'formData.company': function(newValue, oldValue) {
            if (newValue === '1') {
                this.$nextTick(() => {
                    document.getElementById(this.currentField.attribute + '-company').checked = true;
                });
            } else {
                this.$nextTick(() => {
                    document.getElementById(this.currentField.attribute + '-personal').checked = true;
                });
            }
        }
    },

    methods: {
        /**
        * Set the initial, internal value for the field.
        */
        setInitialValue() {
            console.log('this.currentField', this.currentField)

            let value = this.currentField.value || ''

            if (value !== '[]') {
                if (typeof value === 'string' || value instanceof String) {
                    // FIX for whitecube/nova-flexible-content
                    if (value.charAt(0) !== '{') value = '{' + value + '}'

                    value = JSON.parse(value)
                }

                this.formData.first_name = value.first_name ?? ''
                this.formData.last_name = value.last_name ?? ''
                this.formData.street = value.street ?? ''
                this.formData.zip_code = value.zip_code ?? ''
                this.formData.city = value.city ?? ''
                this.formData.country = value.country ?? ''
                this.formData.company = value.company ?? this.currentField.default_company
                this.formData.company_name = value.company_name ?? ''
                this.formData.business_id = value.business_id ?? ''
                this.formData.tax_id = value.tax_id ?? ''
                this.formData.vat_id = value.vat_id ?? ''
                this.formData.phone = value.phone ?? ''
                this.formData.latitude = value.latitude ?? ''
                this.formData.longitude = value.longitude ?? ''
            }

            this.value = value
        },


        /**
        * Fill the given FormData object with the field's internal value.
        */
        fill(formData) {
            this.value = JSON.stringify(this.formData)

            // FIX for whitecube/nova-flexible-content
            let flexibleContent = document.getElementById(this.fieldAttribute.split('__')[0])?.classList.contains('component-form-nova-flexible-content-group')
            if (flexibleContent) this.value = this.value.slice(1, -1)

            formData.append(this.currentField.attribute, this.value || '')
        },

        addressSuggestions(place) {
            let address = getAddressFromPlace(place)

            this.formData.street = address.street
            this.formData.zip_code = address.zipCode
            this.formData.city = address.city
            this.formData.country = address.country
            this.formData.latitude = address.latitude
            this.formData.longitude = address.longitude
        },

        isRequired(name) {
            if (!this.currentField.required) {
                return false
            }

            const defaultFields = ['street', 'zip_code', 'city', 'country']
            const companyFields = ['company_name']
            const personalFields = ['first_name', 'last_name']

            if (defaultFields.includes(name)) {
                return true
            } else if ((this.formData.company === '0' && personalFields.includes(name)) ||
                (this.formData.company === '1' && companyFields.includes(name))) {
                return true
            }

            return false
        }
    },

    computed: {
        showCompany() {
            return this.currentField.only_company || (this.currentField.with_company && this.formData.company === '1')
        },
        showName() {
            return this.currentField.with_name
        }
    }
}
</script>
