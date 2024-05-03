<template>
    <div class="flex flex-col md:flex-row -mx-6 px-6 py-2 md:py-0 space-y-2 md:space-y-0 component-panel-item">
        <div class="md:w-1/4 md:py-3">
            <h4 class="font-normal">
                <span>{{ field.name }}</span>
            </h4>
        </div>

        <div class="md:w-3/4 md:py-3 break-all lg:break-words">
            <div v-if="list" class="list">
                <div v-for="item in address" class="item">
                    <div v-if="address.company === '1'">{{ address.company_name }}</div>
                    <div v-else>{{ item.first_name }} {{ item.last_name }}</div>
                    {{ item.street }}<br>
                    {{ item.zip_code }} {{ item.city }}<br>
                    {{ country(item.country) }}

                    <div v-if="item.company === '1'" class="mt-2">
                        <div v-if="item.business_id">{{ __('business_id') }} {{ item.business_id }}</div>
                        <div v-if="item.tax_id">{{ __('tax_id') }} {{ item.tax_id }}</div>
                        <div v-if="item.vat_id">{{ __('vat_id') }} {{ item.vat_id }}</div>
                    </div>
                </div>
            </div>

            <div v-else-if="address">
                <div v-if="address.company === '1'">{{ address.company_name }}</div>
                <div v-else>{{ address.first_name }} {{ address.last_name }}</div>
                {{ address.street }}<br>
                {{ address.zip_code }} {{ address.city }}<br>
                {{ country(address.country) }}

                <div v-if="address.company === '1'" class="mt-2">
                    <div v-if="address.business_id">{{ __('business_id') }}: {{ address.business_id }}</div>
                    <div v-if="address.tax_id">{{ __('tax_id') }}: {{ address.tax_id }}</div>
                    <div v-if="address.vat_id">{{ __('vat_id') }}: {{ address.vat_id }}</div>
                </div>
            </div>

            <div v-else>–</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],

    data() {
        return {
            address: [],
            list: false
        }
    },

    mounted() {
        this.prepare()
    },

    methods: {
        prepare() {
            const address = this.field.value

            if (address !== null) {
                if (typeof address === 'object') {
                const list = []

                address.map(function (item) {
                    list.push(JSON.parse(item.fields.address))
                })

                this.address = list
                    this.list = true
                } else if (address.startsWith('{')) {
                    this.address = JSON.parse(address)
                }
            }
        },

        country(countryCode) {
            return this.field.country_list[countryCode] ?? countryCode
        }
    }
}
</script>

<style>
    .item {
        margin-top: 10px;
    }

    .item:first-child {
        margin-top: 0;
    }
</style>
