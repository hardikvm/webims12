const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userschema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('User', userschema);