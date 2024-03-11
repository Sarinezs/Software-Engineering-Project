const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    phone: String,
    email: String,
    password: String,
    role:{
        type: String,
        default: 'user',
    }


}, { timestamps: true})

module.exports = mongoose.model('Users', UserSchema)