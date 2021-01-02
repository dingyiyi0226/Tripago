import { Storage } from '@google-cloud/storage'
import { Firestore } from '@google-cloud/firestore'
import exifr from 'exifr'

const cloudStorage = new Storage()
const cloudBucket = cloudStorage.bucket(process.env.GCLOUD_STORAGE_BUCKET);

const firestore = new Firestore();

async function photoProcessing(file, user, album) {

  let photoUrl = ''
  let photoLoc = {}
  let noLoc = true

  const parsePhoto = async () => {
    let loc = await exifr.gps(file.buffer)
    if(loc) {
      photoLoc = {lat: loc.latitude, lng: loc.longitude}
      noLoc = false
    }
    else {
      console.log('no location')
    }
  }

  const upload2Storage = new Promise((resolve, reject) => {
    const blob = cloudBucket.file(`${user}/${album}/${file.originalname}`);
    const blobStream = blob.createWriteStream({
      resumable: false,
      public: true
    });

    blobStream.on('error', err => {
      next(err);
    });

    blobStream.on('finish', (response) => {
      photoUrl = `https://${cloudBucket.name}.storage.googleapis.com/${blob.name}`;
      resolve(response)
    });
    blobStream.end(file.buffer);
  })

  const upload2Database = async () => {
    const photoDoc = firestore.doc(`users/${user}/albums/${album}/photos/${file.originalname}`)

    if(noLoc){
      let res = await photoDoc.set({
        url: photoUrl,
      })
    }
    else {
      let res = await photoDoc.set({
        url: photoUrl,
        location: new Firestore.GeoPoint(photoLoc.lat, photoLoc.lng)
      })
    }
  }

  await parsePhoto()
  await upload2Storage
  await upload2Database()

  console.log(`finish processing ${file.originalname}`)
}

async function updateAlbumCoverPhoto(user, album) {

  const albumSnapshot = await firestore.doc(`users/${user}/albums/${album}`).get()
  // console.log('update', albumSnapshot)
  const albumData = albumSnapshot.data()

  if (albumData && albumData.coverPhoto) {
    console.log('had coverphoto already')
  }
  else {
    console.log('change coverphoto')
    const coverPhotoSnapshot = await firestore.collection(`users/${user}/albums/${album}/photos`).limit(1).get()
    const coverPhotoData = coverPhotoSnapshot.docs[0].data()
    // console.log(coverPhotoData)
    const albumDoc = await firestore.doc(`users/${user}/albums/${album}`)
    await albumDoc.set({
      coverPhoto: coverPhotoData
    })
  }
}

export { photoProcessing, updateAlbumCoverPhoto }
