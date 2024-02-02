const mongoose = require('mongoose')

 const UserSchema = new mongoose.Schema ({
    name: String,
    position: String,
    email: String,
    address: String,
    birthday: String,
    age: Number
 })

 const UserModel = mongoose.model("users", UserSchema)

 module.exports = UserModel