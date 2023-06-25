const mongoose = require('mongoose')

export default async function handler(req, res) {
  mongoose
    .connect(
      'mongodb+srv://kennyt341:i17fksuFLqwSCjg2@cluster0.k1un0jo.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(() => console.log('Connected Successfully'))

    .catch((err) => {
      console.log(err)
    })
  res.status(200).json({ name: 'John Doe' })
  if (req.method === 'POST') {
    const { username, password } = req.body
    console.log(username, password)
  }
}
