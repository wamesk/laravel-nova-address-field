<template>
    <div v-if="list && Array.isArray(address)" class="list">
        <div v-for="(item, idx) in address" :key="idx" class="item">
            <div v-if="item.company === '1'">{{ item.company_name }}</div>
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
            let raw = this.field?.value

            if (raw === null || raw === undefined || raw === '') {
                this.address = null
                this.list = false
                return
            }

            if (Array.isArray(raw)) {
                this.address = raw
                this.list = true
                return
            }
            if (typeof raw === 'object') {
                this.address = raw
                this.list = false
                return
            }

            if (typeof raw === 'string') {
                const s = raw.trim()

                if (s.startsWith('{') || s.startsWith('[')) {
                    try {
                        const parsed = JSON.parse(s)
                        if (Array.isArray(parsed)) {
                            this.address = parsed
                            this.list = true
                        } else if (parsed && typeof parsed === 'object') {
                            this.address = parsed
                            this.list = false
                        } else {
                            this.address = null
                            this.list = false
                        }
                        return
                    } catch (e) {

                    }
                }

                try {
                    const outer = JSON.parse(s)
                    if (Array.isArray(outer)) {
                        const list = outer.map((it) => {
                            let a = it?.attributes?.address
                            if (!a) return null

                            if (typeof a === 'object') return a

                            if (typeof a === 'string') {
                                const aa = a.trim()
                                if (aa.startsWith('{') || aa.startsWith('[')) {
                                    try { return JSON.parse(aa) } catch (_) {}
                                }
                                try { return JSON.parse('{' + aa + '}') } catch (_) {}
                            }
                            return null
                        }).filter(Boolean)

                        if (list.length) {
                            this.address = list
                            this.list = true
                            return
                        }
                    }
                } catch (_) {

                }
            }

            this.address = null
            this.list = false
        },

        country(code) {
            return this.field.country_list?.[code] ?? code
        }
    }
}
</script>
