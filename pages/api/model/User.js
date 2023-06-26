const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  username: { type: String },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
    sparse: true,
  },
  password: { type: String, required: true },
})

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema)

module.exports = UserModel
