import VueGoogleMaps from '@fawmi/vue-google-maps'

import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
    app.use(VueGoogleMaps, {
        load: {
            key: Nova.appConfig.google_maps_api_key,
            libraries: 'places'
        }
    })

    app.component('index-address', IndexField)
    app.component('detail-address', DetailField)
    app.component('form-address', FormField)
})
