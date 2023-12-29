const mongoose = require('mongoose')
const UserModel = require('./model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next'

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
    const { email, password } = req.body
    const userDoc = await UserModel.findOne({ email })
    const passed = bcrypt.compareSync(password, userDoc.password)
    const secret = 'asdfe45we45w345wegw345werjktjwertkj'
    if (passed) {
      const token = jwt.sign(
        { name: userDoc.name, admin: passed, id: userDoc._id },
        secret
      )
      setCookie('token', token, { req, res, maxAge: 60 * 60 * 24 })
      res.json(userDoc)
    } else {
      res.status(400).json('Invalid Password')
    }
  }
}
