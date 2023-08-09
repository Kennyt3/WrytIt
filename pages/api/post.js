import nc from 'next-connect'
import onError from '../../common/errormiddleware'
import multer from 'multer'
import path from 'path'
// import { executeQuery } from '../../../config/db'

export const config = {
  api: {
    bodyParser: false,
  },
}

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(process.cwd(), 'public', 'uploads'))
    },
    filename: (req, file, cb) => {
      cb(null, new Date().getTime() + '-' + file.originalname)
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
})
  .use(upload.single('file'))
  .post((req, res) => {
    res.status(201).json({ body: req.body, file: req.file })
  })

export default handler
