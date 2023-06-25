const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
})

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema)

module.exports = UserModel
