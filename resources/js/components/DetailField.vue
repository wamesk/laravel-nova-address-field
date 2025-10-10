<template>
    <div class="flex flex-col md:flex-row -mx-6 px-6 py-2 md:py-0 space-y-2 md:space-y-0 component-panel-item">
        <div class="md:w-1/4 md:py-3">
            <h4 class="font-normal">
                <span>{{ field.name }}</span>
            </h4>
        </div>

        <div class="md:w-3/4 md:py-3 break-words">
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
                        <div v-if="item.phone">{{ __('phone') }}: {{ item.phone }}</div>
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
        </div>
    </div>
</template>

<script>
export default {
    props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],
    data() {
        return {
            address: null,
            list: false,
        }
    },
    mounted() {
        this.prepare()
    },
    methods: {
        prepare() {
            let raw = this.field?.value

            // 1) nič tu nie je
            if (raw === null || raw === undefined || raw === '') {
                this.address = null
                this.list = false
                return
            }

            // 2) už je to pole/objekt (ideálne)
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

            // 3) prišiel string → skús parse
            if (typeof raw === 'string') {
                const s = raw.trim()

                // a) štandardný JSON objekt/array
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
                    } catch (_) { /* padni na b) */ }
                }

                // b) whitecube/nova-flexible-content – array blokov, každá položka má fields.address (string alebo objekt)
                try {
                    const outer = JSON.parse(s)
                    if (Array.isArray(outer)) {
                        const list = outer.map(it => {
                            let a = it?.fields?.address
                            if (!a) return null
                            if (typeof a === 'object') return a
                            if (typeof a === 'string') {
                                const t = a.trim()
                                if (t.startsWith('{') || t.startsWith('[')) {
                                    try { return JSON.parse(t) } catch (_) {}
                                }
                                // fallback: niektoré flexibilné uloženia posielajú bez {}
                                try { return JSON.parse('{' + t + '}') } catch (_) {}
                            }
                            return null
                        }).filter(Boolean)

                        if (list.length) {
                            this.address = list
                            this.list = true
                            return
                        }
                    }
                } catch (_) { /* nič */ }
            }

            // default
            this.address = null
            this.list = false
        },

        country(code) {
            return this.field.country_list?.[code] ?? code
        }
    }
}
</script>

<style>
.item { margin-top: 10px; }
.item:first-child { margin-top: 0; }
</style>
