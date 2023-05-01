
const mongoose = require('mongoose')

const adsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    image: {
        type: Image,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    advertiser_info: {
        type: String,
        required: true
    },
    contact_info: {
        type: Image,
        required: true
    }
})


// Collection creation
const Ads = mongoose.model('Ad', adsSchema)

module.exports = Ads