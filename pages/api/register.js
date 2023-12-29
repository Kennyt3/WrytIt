const mongoose = require('mongoose')
const UserModel = require('./model/User')
const bcrypt = require('bcryptjs')
var salt = bcrypt.genSaltSync(10)

mongoose
  .connect(
    'mongodb+srv://kennyt341:i17fksuFLqwSCjg2@cluster0.k1un0jo.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log('Connected Successfully'))

  .catch((err) => {
    console.log(err)
  })

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, password, email } = req.body
    console.log(name)
    try {
      const userDoc = new UserModel({
        name,
        email,
        password: bcrypt.hashSync(password, salt),
      })
      await userDoc.save()
      console.log(userDoc)
      res.json(userDoc)
    } catch (e) {
      res.status(450).json(e)
      console.log(UserModel)
    }
  }
}
