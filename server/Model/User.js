const Mongoose = require('mongoose')

const User = Mongoose.Schema({
    name: String,
    email: String,
    age: Number,
})

module.exports = Mongoose.model("User",User)