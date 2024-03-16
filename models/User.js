const {Schema, model} = require('mongoose')

const User = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, unique: true, required: true }
})

module.exports = model('User', User)





















