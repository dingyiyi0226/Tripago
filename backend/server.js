import cors from 'cors'
import express from 'express'
import multer from 'multer'
import { Storage } from '@google-cloud/storage'
import { Firestore } from '@google-cloud/firestore'

import { photoProcessing, updateAlbumCoverPhoto } from './photoProcessing.js'

const app = express()
app.use(cors())
app.use(express.json())

const storage = multer.memoryStorage()
const cloudStorage = new Storage()
const cloudBucket = cloudStorage.bucket(process.env.GCLOUD_STORAGE_BUCKET);
const firestore = new Firestore();

const USER = 'ethia_polis'

const upload = multer({storage: storage})
const MAX_FILE = 12

/**
  DB Schema (temp version)
  users/
  - user1
      description: String
      albums/
      - album1:
          description: String
          coverPhoto: {url: String, location: GeoPoint}
          photos/
          - photo1:
              url: String
              location: GeoPoint
          - photo2:
      - album2:
  - user2
 */

app.get('/albums', async (req, res) => {
  const albumsSnapshot = await firestore.collection(`users/${USER}/albums`).get()
  const albums = []
  albumsSnapshot.forEach( album => {
    albums.push({id: album.id, ...album.data()})
  })
  res.status(200).send(albums)
})

app.get('/album-photos', async (req, res) => {
  const { album } = req.query

  const photosSnapshot = await firestore.collection(`users/${USER}/albums/${album}/photos`).get()
  const photos = []
  photosSnapshot.forEach( photo => {
    photos.push({id: photo.id, ...photo.data()})
  })
  res.status(200).send(photos)
})

app.get('/album-coverphoto', async (req, res) => {
  const { album } = req.query
  const coverPhotoSnapshot = await firestore.doc(`users/${USER}/albums/${album}`).get()

  if (coverPhotoSnapshot.data() && coverPhotoSnapshot.data().coverPhoto) {
    res.status(200).send(coverPhotoSnapshot.data().coverPhoto)
  }
  else {
    res.status(200).send()
  }
})

app.get('/album-description', async (req, res) => {
  const { album } = req.query
  const albumSnapshot = await firestore.doc(`users/${USER}/albums/${album}`).get()

  if (albumSnapshot.data() && albumSnapshot.data().description) {
    res.status(200).send(albumSnapshot.data().description)
  }
  else {
    res.status(200).send()
  }
})


app.delete('/photo', async (req, res) => {
  const { album, photo } = req.query

  const photoFile = await cloudBucket.file(`${USER}/${album}/${photo}`);
  const photoDoc = await firestore.doc(`users/${USER}/albums/${album}/photos/${photo}`);

  await photoFile.delete()
  await photoDoc.delete()
  // console.log('finish delete', album, photo)

  await updateAlbumCoverPhoto(USER, album)

  res.status(200).send()

})


app.post('/upload-photos', upload.array('photos', MAX_FILE), async (req, res, next) => {
  if (!req.files.length){
    console.log('error')
    res.status(400).send({ message: 'No file uploaded' })
  }

  // console.log('success')
  const { album } = JSON.parse(JSON.stringify(req.body))

  for (let file of req.files) {
    await photoProcessing(file, USER, album)  // Should the server response to client immediatly or await photo upload to db or not ?
  }
  await updateAlbumCoverPhoto(USER, album)
  res.status(200).send();
})

// Debug function
app.get('/', (req, res) => {
  res.status(200).send('Hello, world!')
});

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server is up on port ${port}.`)
})
