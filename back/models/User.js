const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        lowercase: true,
        required: true,
    },
    username:String,
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);