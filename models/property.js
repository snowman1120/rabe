const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    propertyType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'propertytypes'
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
    city: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
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
    commission: {
        type: Number,
    },
    status: {
        type: String,
        required: true,
        enum: ['inprogress', 'ended'],
        default: 'inprogress'
    },
    winner: {
        bid: {
            type: mongoose.Schema.Types.ObjectId
        },
        user: {
            type: mongoose.Schema.Types.ObjectId
        },
        commission: {
            type: Number
        },
        howWin: {
            type: String,
            defualt: 'autowin',
            enum: ['quickwin', 'autowin'],
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// PropertySchema.statics.updateStatus = async function updateStatus () {
//     try {
//         const properties = await this.find({status: 'inprogress'});
//         properties.forEach(async property => {
//             if((new Date(property.date)).getTime() + MAX_LEFT_DAYS * 86400000 < (new Date()).getTime()) { 
//                 property.status = 'ended';
//                 await property.save();
//             }
//         });
//     } catch (err) {
//         console.log(err.message);
//     }
// }

module.exports = mongoose.model('properties', PropertySchema);
