import fs from 'fs'
import cors from 'cors'
import express from 'express'
import multer from 'multer'

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 4000

// store images to disk, cannot deploy to app engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {

    const { album } = JSON.parse(JSON.stringify(req.body))
  // console.log(album)
    const path = `albums/${album}`

    fs.mkdirSync(path, { recursive: true })
    cb(null, path)
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname
    cb(null, fileName)
  }
})

// const storage = multer.memoryStorage()

const upload = multer({storage: storage})
const MAX_FILE = 12

app.post('/photos', upload.array('photos', MAX_FILE), function (req, res, next) {

  if (req.files.length){
    console.log('success')
    res.status(200).send({
      message: 'success!'
    })
  }
  else {
    console.log('error')
    res.status(404).send({
      message: 'error!'
    })
  }
})

// Debug function
app.get('/', (req, res) => {
  res.status(200).send('Hello, world!')
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`)
})