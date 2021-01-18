import { Storage } from '@google-cloud/storage'
import { Firestore } from '@google-cloud/firestore'
import { Client } from '@googlemaps/google-maps-services-js'
import exifr from 'exifr'

const cloudStorage = new Storage()
const cloudBucket = cloudStorage.bucket(process.env.GCLOUD_STORAGE_BUCKET);

const firestore = new Firestore();

async function photoProcessing(file, userID, album) {
  console.log('processing called')

  let photoUrl = ''
  let photoLoc = {}
  let photoAddr = []
  let noLoc = true

  const parsePhoto = async () => {
    let loc = await exifr.gps(file.buffer)
    console.log('loc:',loc)
    if(loc) {
      photoLoc = {lat: loc.latitude, lng: loc.longitude}
      noLoc = false

      const client = new Client({})
      const res = await client.reverseGeocode({
        params: {
          key: process.env.GOOGLE_API_KEY,
          language: 'en',
          latlng: photoLoc,
          result_type: ['administrative_area_level_1'] // Level of City
        }
      })

      if (res.data.status==="OK") {
        const addressComponents = res.data.results[0].address_components  // first result is the most explicit one
        photoAddr = addressComponents.map( component => component.long_name.toLowerCase())
        console.log(photoAddr)
      }
      else {
        console.log('bad geocoding')
      }
    }
    else {
      console.log('no location')
    }
  }

  const upload2Storage = new Promise((resolve, reject) => {
    const blob = cloudBucket.file(`${userID}/${album}/${file.originalname}`);
    const blobStream = blob.createWriteStream({
      resumable: false,
      public: true
    });

    blobStream.on('error', err => {
      next(err);
    });

    blobStream.on('finish', (response) => {
      photoUrl = encodeURI(`https://${cloudBucket.name}.storage.googleapis.com/${blob.name}`);
      resolve(response)
    });
    blobStream.end(file.buffer);
  })

  const upload2Database = async () => {
    // const photoDoc = firestore.doc(`users/${user}/albums/${album}/photos/${file.originalname}`)
    const photoDoc = firestore.doc(`all-users/${userID}/albums/${album}/photos/${file.originalname}`)
    if(noLoc){
      let res = await photoDoc.set({
        url: photoUrl,
      })
    }
    else {
      let res = await photoDoc.set({
        url: photoUrl,
        location: new Firestore.GeoPoint(photoLoc.lat, photoLoc.lng),
        address: photoAddr
      })
    }
  }

  await parsePhoto()
  console.log('finish parsing')
  await upload2Storage
  console.log('finish uploading to storage')
  await upload2Database()
  console.log('finish uploading to db')

  console.log(`finish processing ${file.originalname}`)
}

async function updateAlbumCoverPhoto(userID, album) {
  // const albumSnapshot = await firestore.doc(`users/${user}/albums/${album}`).get()
  const albumSnapshot = await firestore.doc(`all-users/${userID}/albums/${album}`).get()
  // console.log('update', albumSnapshot)
  const albumData = albumSnapshot.data()

  console.log('change coverphoto')
  // const coverPhotoSnapshot = await firestore.collection(`users/${user}/albums/${album}/photos`).limit(1).get()
  const coverPhotoSnapshot = await firestore.collection(`all-users/${userID}/albums/${album}/photos`).limit(1).get()
  // const albumDoc = await firestore.doc(`users/${user}/albums/${album}`)
  const albumDoc = await firestore.doc(`all-users/${userID}/albums/${album}`)

  if (coverPhotoSnapshot.empty) {
    await albumDoc.set({
      coverPhoto: {}
    }, {merge: true})
  }
  else {
    const coverPhotoData = coverPhotoSnapshot.docs[0].data()
    await albumDoc.set({
      coverPhoto: coverPhotoData
    }, {merge: true})
  }
}

async function updateUserSettings(userID, userDescription, userPhoto) {

  let photoUrl = ''

  // Upload to Cloud Storage
  if (userPhoto){
    const upload2Storage = new Promise((resolve, reject) => {
      const blob = cloudBucket.file(`${userID}/photo/${userPhoto.originalname}`);  // must contain file extension
      const blobStream = blob.createWriteStream({
        resumable: false,
        public: true
      });

      blobStream.on('error', err => {
        next(err);
      });

      blobStream.on('finish', (response) => {
        photoUrl = encodeURI(`https://${cloudBucket.name}.storage.googleapis.com/${blob.name}`);
        resolve(response)
      });
      blobStream.end(userPhoto.buffer);
    })
    await upload2Storage
  }

  // Upload to database
  const userDoc = firestore.doc(`all-users/${userID}`)

  if (userDescription && userPhoto){
    await userDoc.set({
      description: userDescription,
      photo: photoUrl
    }, {merge: true})
  }
  else if (userDescription){
    console.log('only description')
    await userDoc.set({
      description: userDescription,
    }, {merge: true})
  }
  else if (userPhoto){
    console.log('only photo')
    await userDoc.set({
      photo: photoUrl,
    }, {merge: true})
  }

  console.log('finish update user settings')
}

export { photoProcessing, updateAlbumCoverPhoto, updateUserSettings }
