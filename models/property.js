const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    propertyType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'propertyType'
    },
    unit: {
        type: Number,
        default: 0
    },
    yearBuilt: {
        type: Number,
        default: 0
    },
    bedrooms: {
        type: Number,
        default: 0
    },
    bathrooms: {
        type: Number,
        default: 0
    },
    address: {
        full: {
            type: String,
            required: true
        },
        streetNumber: {
            long: String,
            short: String
        },
        route: {
            long: String,
            short: String
        },
        street: {
            long: String,
            short: String
        },
        locality: {
            long: String,
            short: String
        },
        areaLevel_3: {
            long: String,
            short: String
        },
        areaLevel_2: {
            long: String,
            short: String
        },
        areaLevel_1: {
            long: String,
            short: String
        },
        country: {
            long: String,
            short: String
        },
        postalCode: {
            long: String,
            short: String
        }
    },
    photos: [],
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('property', PropertySchema);
