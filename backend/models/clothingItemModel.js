const mongoose = require('mongoose')

const Schema = mongoose.Schema

const clothingItemSchema = new Schema({
    nameYay:{
        type: String,
        required: true
    },
    typeOfItem:{
        type: String,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    sizeNumber:{
        type: Number,
        required: false
    },
    imageURL:{
        type: String,
        required: false
    }
}, {timestamps: true})

module.exports = mongoose.model('clothingItem', clothingItemSchema)