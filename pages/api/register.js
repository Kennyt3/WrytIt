const mongoose = require('mongoose')
const UserModel = require('./model/User')
const bcrypt = require('bcryptjs')

export default async function handler(req, res) {
  mongoose
    .connect(
      'mongodb+srv://kennyt341:i17fksuFLqwSCjg2@cluster0.k1un0jo.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(() => console.log('Connected Successfully'))

    .catch((err) => {
      console.log(err)
    })
  var salt = bcrypt.genSaltSync(10)
  if (req.method === 'POST') {
    const { username, password, email } = req.body
    try {
      const userDoc = new UserModel({
        username,
        email,
        password: bcrypt.hashSync(password, salt),
      })
      userDoc.save()
      res.status(200).json(userDoc)
    } catch (e) {
      res.status(500).json(e)
      console.log(UserModel)
    }
  }
}
