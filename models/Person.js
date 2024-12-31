const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    work : {
        type: String,
        required: true,
        enum: ['cook', 'driver', 'carpenter', 'coder', 'physicist']
    },
    username : {
        type: String,
        required: true
    },
    password : {
        type : String,
        required: true
    }
})

const personModel = mongoose.model('funperson', personSchema);
module.exports = personModel;