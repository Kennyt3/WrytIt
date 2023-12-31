import nc from 'next-connect'
import multer from 'multer'
import path from 'path'
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const PostModel = require('./model/Post')
export const config = {
  api: {
    bodyParser: false,
  },
}

mongoose
  .connect(
    'mongodb+srv://kennyt341:i17fksuFLqwSCjg2@cluster0.k1un0jo.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log('Connected Successfully'))

  .catch((err) => {
    console.log(err)
  })
const secret = 'asdfe45we45w345wegw345werjktjwertkj'
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(process.cwd(), 'public', 'uploads'))
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    },
  }),
})

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).end('Something broke')
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end('Page is not found')
  },
}).post(upload.single('file'), (req, res) => {
  console.log(req.body)
  console.log(req.file)
  // const { originalname } = req?.file
  const pathy = '/uploads'
  // const newPath = pathy + '/' + originalname
  const { token } = req.cookies
  console.log(token)
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err
    const { title, content, name, link, locale, date, token } = req.body
    try {
      const postDoc = new PostModel({
        title,
        name,
        date,
        link,
        locale,
        content,
        // cover: newPath,
        author: info.id,
      })
      await postDoc.save()
      res.json(postDoc)
    } catch (e) {
      console.error(e)
      res.status(450).json(e)
    }
  })
})

export default handler
