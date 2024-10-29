function getAddressFromPlace(place) {
    let parameters = {
        street_number: ['street_number'],
        zipCode: ['postal_code'],
        street: ['street_address', 'route'],
        region: [
            'administrative_area_level_1',
            'administrative_area_level_2',
            'administrative_area_level_3',
            'administrative_area_level_4',
            'administrative_area_level_5'
        ],
        city: [
            'locality',
            'sublocality',
            'sublocality_level_1',
            'sublocality_level_2',
            'sublocality_level_3',
            'sublocality_level_4'
        ],
        country: ['country']
    };

    let address = {
        street_number: '',
        zipCode: '',
        street: '',
        region: '',
        city: '',
        country: '',
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng(),
    };

    place.address_components.forEach(item => {
        for (let parameter in parameters) {
            if (parameters[parameter].indexOf(item.types[0]) !== -1) {
                if (parameter === 'country') {
                    address[parameter] = item.short_name;
                } else {
                    address[parameter] = item.long_name;
                }
            }
        }
    });

    address.street += ' ' + address.street_number;
    delete address.street_number;

    return address;
}

module.exports = {
    getAddressFromPlace: getAddressFromPlace
}
