import nc from 'next-connect'
import multer from 'multer'
import path from 'path'

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
    const { originalname, path } = req.file
    // const parts = originalname.split('.')
    // const ext = parts[parts.length - 1]
    // const newPath = path + '.' + ext
    // fs.renameSync(path, newPath)
    res.status(201).json({ body: req.body, file: req.file, newPath: path })
  })

export default handler
