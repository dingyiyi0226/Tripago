import { Storage } from '@google-cloud/storage'
import { Firestore } from '@google-cloud/firestore'

const cloudStorage = new Storage()
const cloudBucket = cloudStorage.bucket(process.env.GCLOUD_STORAGE_BUCKET);

const firestore = new Firestore();

async function photoProcessing(file, user, album) {

  let photoUrl = ''
  let photoLoc = {}

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

  const parsePhoto = async () => {
    photoLoc = {lat: 25.2, lng: 121.3}
  }

  const upload2Database = async () => {
    const photoDoc = firestore.collection(`users/${user}/albums/${album}/photos/`).doc()
    let res = await photoDoc.set({
      url: photoUrl,
      location: new Firestore.GeoPoint(photoLoc.lat, photoLoc.lng)
    })
  }

  await upload2Storage
  await parsePhoto()
  await upload2Database()

  console.log(`finish processing ${file.originalname}`)
}

export default photoProcessing
