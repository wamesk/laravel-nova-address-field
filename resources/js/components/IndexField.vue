<template>
    <div v-if="list" class="list">
        <div v-for="item in address" class="item">
            <div v-if="address.company === '1'">{{ address.company_name }}</div>
            <div v-else>{{ item.first_name }} {{ item.last_name }}</div>
            {{ item.street }}<br>
            {{ item.zip_code }} {{ item.city }}<br>
            {{ country(item.country) }}

            <div v-if="item.company === '1' || field.with_phone" class="mt-2">
                <div v-if="item.business_id">{{ __('business_id') }} {{ item.business_id }}</div>
                <div v-if="item.tax_id">{{ __('tax_id') }} {{ item.tax_id }}</div>
                <div v-if="item.vat_id">{{ __('vat_id') }} {{ item.vat_id }}</div>
                <div v-if="item.phone">{{ __('phone') }} {{ item.phone }}</div>
            </div>
        </div>
    </div>

    <div v-else-if="address">
        <div v-if="address.company === '1'">{{ address.company_name }}</div>
        <div v-else>{{ address.first_name }} {{ address.last_name }}</div>
        {{ address.street }}<br>
        {{ address.zip_code }} {{ address.city }}<br>
        {{ country(address.country) }}

        <div v-if="address.company === '1' || field.with_phone" class="mt-2">
            <div v-if="address.business_id">{{ __('business_id') }}: {{ address.business_id }}</div>
            <div v-if="address.tax_id">{{ __('tax_id') }}: {{ address.tax_id }}</div>
            <div v-if="address.vat_id">{{ __('vat_id') }}: {{ address.vat_id }}</div>
            <div v-if="address.phone">{{ __('phone') }}: {{ address.phone }}</div>
        </div>
    </div>

    <div v-else>–</div>
</template>

<script>
import { Localization } from 'laravel-nova'

export default {
    mixins: [Localization],

    props: ['resourceName', 'field'],

    data() {
        return {
            list: false,
            address: null
        }
    },

    mounted() {
        this.prepare()
    },

    methods: {
        prepare() {
            let address = this.field.value

            // FIX for whitecube/nova-flexible-content
            if (address.length && !address.startsWith('{')) {
                let list = []

                JSON.parse(address).forEach(function (item) {
                    list.push(JSON.parse('{' + item.attributes.address + '}'))
                })

                address = list
                this.list = true
            } else if (address.startsWith('{')) {
                address = JSON.parse(address)
            }

            this.address = address
        },

        country(countryCode) {
            return this.field.country_list[countryCode] ?? countryCode
        }
    }
}
</script>
