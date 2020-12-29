import fs from 'fs'
import cors from 'cors'
import express from 'express'
import multer from 'multer'
import { Storage } from '@google-cloud/storage'

const app = express()
app.use(cors())
app.use(express.json())

// Store images to disk, cannot deploy to app engine
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {

//     const { album } = JSON.parse(JSON.stringify(req.body))
//   // console.log(album)
//     const path = `albums/${album}`

//     fs.mkdirSync(path, { recursive: true })
//     cb(null, path)
//   },
//   filename: (req, file, cb) => {
//     const fileName = file.originalname
//     cb(null, fileName)
//   }
// })

const storage = multer.memoryStorage()

const cloudStorage = new Storage()
const cloudBucket = cloudStorage.bucket(process.env.GCLOUD_STORAGE_BUCKET);

const USER = 'ethia_polis'

const upload = multer({storage: storage})
const MAX_FILE = 12

app.post('/photos', upload.array('photos', MAX_FILE), async (req, res, next) => {
  if (!req.files.length){
    console.log('error')
    res.status(400).send({ message: 'No file uploaded' })
  }

  // console.log('success')
  const { album } = JSON.parse(JSON.stringify(req.body))

  let publicUrls = []
  let promises = []

  req.files.forEach(file => {
    const promise = new Promise((resolve, reject) => {
      const blob = cloudBucket.file(`${USER}/${album}/${file.originalname}`);
      const blobStream = blob.createWriteStream({
        resumable: false,
      });

      blobStream.on('error', err => {
        next(err);
      });

      blobStream.on('finish', (response) => {
        const publicUrl = `https://${cloudBucket.name}.storage.googleapis.com/${blob.name}`;
        publicUrls.push(publicUrl)
        resolve(response)
      });
      blobStream.end(file.buffer);
    })
    promises.push(promise)
  })
  await Promise.all(promises)
  console.log(publicUrls)
  res.status(200).send(publicUrls);
})

// Debug function
app.get('/', (req, res) => {
  res.status(200).send('Hello, world!')
});

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server is up on port ${port}.`)
})