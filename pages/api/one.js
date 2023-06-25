const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const UserModel = require('./model/User')
const bcrypt = require('bcryptjs')

var salt = bcrypt.genSaltSync(10)
const app = express()
app.use(cors())

app.use(express.json())

mongoose
  .connect(
    'mongodb+srv://kennyt341:i17fksuFLqwSCjg2@cluster0.k1un0jo.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log('Connected Successfully'))

  .catch((err) => {
    console.log(err)
  })
app.post('/test', (req, res) => {
  const { username, password } = req.body
  console.log(username, password)
})
app.post('/login', (req, res) => {
  const { username, password } = req.body
  res.json({ username, password })
  try {
    const userDoc = new UserModel({
      username,
      password: bcrypt.hashSync(password, salt),
    })
    userDoc.save()
    res.json(userDoc)
  } catch (e) {
    res.status(400).json(e)
  }
})

app.listen(4000)
