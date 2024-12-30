const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const foodModel = mongoose.model('funfood', foodSchema);
module.exports = foodModel;