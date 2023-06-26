const mongoose = require('mongoose')
const UserModel = require('./model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

export default async function handler(req, res) {
  mongoose
    .connect(
      'mongodb+srv://kennyt341:i17fksuFLqwSCjg2@cluster0.k1un0jo.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(() => console.log('Connected Successfully'))

    .catch((err) => {
      console.log(err)
    })
  const secret = 'asdfe45we45w345wegw345werjktjwertkj'
  if (req.method === 'POST') {
    const { email, password } = req.body
    const userDoc = await UserModel.findOne({ email })
    const passed = bcrypt.compareSync(password, userDoc.password)
    if (passed) {
      jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err
        res.cookie('token', token).json({
          id: userDoc._id,
          username: userDoc.username,
          email,
        })
      })
      res.status(200).json('Done')
    } else {
      res.status(400).json('wrong credentials')
    }
  }
}
