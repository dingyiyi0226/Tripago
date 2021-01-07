import cors from 'cors'
import express from 'express'
import session from 'express-session'
import multer from 'multer'
import { Storage } from '@google-cloud/storage'
import { Firestore, FieldPath } from '@google-cloud/firestore'
import { FirestoreStore } from '@google-cloud/connect-firestore'
import { photoProcessing, updateAlbumCoverPhoto } from './photoProcessing.js'

const allowed_origins = ['http://localhost:3000', 'https://dingyiyi0226.github.io']

const app = express();
app.use(cors({
  credentials: true,
  origin: allowed_origins
}));
app.use(express.json());
app.use(
  session({
    store: new FirestoreStore({
      dataset: new Firestore(),
      kind: 'express-sessions',
    }),
    secret: 'su35/3wu0 m, cjo4',
    resave: false,
    saveUninitialized: false,
  })
);

const storage = multer.memoryStorage();
const cloudStorage = new Storage();
const cloudBucket = cloudStorage.bucket(process.env.GCLOUD_STORAGE_BUCKET);
const firestore = new Firestore();

//Some tmp data
const USER = 'ethia_polis';
// const USER = 'PKdropthebeat';
const userID = '12345';
let users = [
  {userID: '1', userName: 'Alice', email: 'alice@gmail.com', password: 'qwerty'},
  {userID: '2', userName: 'Bob', email: 'bob@gmail.com', password: 'qwerty'},
  {userID: '3', userName: 'Nebuchadnezzar', email: 'nebuchadnezzar@gmail.com', password: 'qwerty'},
  {userID: '4', userName: '', email: '', password: ''}
];


const upload = multer({storage: storage});
const MAX_FILE = 12;

// Some response format

const SESSION_LOGGED_IN = (name) => {
  return {
    isLogin: true,
    name: name
  }
};

const SESSION_NOT_LOGGED_IN = () => {
  return {
    isLogin: false,
    name: ''
  }
};

const LOGGED_IN = (name) => {
  return {
    status: SESSION_LOGGED_IN(name),
    message: 'Login successfully'
  }
};

const NOT_LOGGED_IN = (name) => {
  return {
    status: SESSION_NOT_LOGGED_IN(),
    message: 'Wrong email or password'
  }
};

/**
  DB Schema (temp version)
  users/
  - user1
      description: String
      albums/
      - album1:
          description: String
          coverPhoto: {url: String, location: GeoPoint, address: [String]}
          photos/
          - photo1:
              url: String
              location: GeoPoint
              address: [String]
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

app.post('/album-create', async (req, res) => {
  const { albumName, albumDescription } = req.body
  const albumRef = await firestore.doc(`users/${USER}/albums/${albumName}`)
  try {
    await albumRef.create({description: albumDescription})
    console.log('album create successfully')
    res.status(200).send()
  }
  catch {
    console.log('album already exist')
    res.status(404).send()
  }
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

app.get('/platform', async (req, res) => {
  let { region } = await req.query
  if (region){
    region = region.toLowerCase()
  }
  console.log(region)

  let users = []
  let validAlbums = []

  const usersSnapshot = await firestore.collection('users').get()
  usersSnapshot.forEach( user => {
    users.push(user.id)
  })

  if (region) {
    const regionPath = new FieldPath('coverPhoto', 'address')
    for (let user of users) {
      const albumsSnapshot = await firestore.collection(`users/${user}/albums`)
                                     .where( regionPath, 'array-contains', region).get()
      albumsSnapshot.forEach( album => {
        validAlbums.push({user: user, albumName: album.id})
      })
    }
  }
  else {
    const regionPath = new FieldPath('coverPhoto', 'address')
    for (let user of users) {
      const albumsSnapshot = await firestore.collection(`users/${user}/albums`).get()
      albumsSnapshot.forEach( album => {
        validAlbums.push({user: user, albumName: album.id})
      })
    }
  }

  console.log(validAlbums)

  res.status(200).send(validAlbums)
})

// Login & Sessions
app.post('/register', async (req, res) => {
  //TODO
});

app.post('/login', async (req, res) => {
  console.log('login called')
  const { email, password } = req.body;
  console.log('received: ', email, password);
  const userDoc = await firestore
    .collection('all-users')
    .where('email', '==', email)
    .where('password', '==', password)
    .get();
  let userID = '';
  let name = '';
  userDoc.forEach(doc => {
    userID = String(doc.id);
    name = doc.data().name;
  })
  if (userID) { // login successfully
    req.session.userID = userID;
    res.status(200).send(LOGGED_IN(name));
  } else { // user not found
    res.status(200).send(NOT_LOGGED_IN());
  }
});

app.post('/logout', async (req, res) => {
  req.session.destroy( err => {
    console.log(err);
  });
  res.status(200).send('logged out');
});

app.get('/session', async (req, res) => {
  const sessionID = req.sessionID;
  console.log('/session req:', sessionID);

  const validated = await firestore
    .collection('express-sessions')
    .doc(sessionID)
    .get();

  const data = validated.data(); // undefined or {..., data: '{"cookie":{...},"userID":"???"}'}
  if (data) {
    const userID = String(JSON.parse(data.data).userID);
    const userDoc = await firestore
      .collection('all-users')
      .doc(userID)
      .get();
    const userName = userDoc.data().name;
    console.log('userName:', userName);

    req.session.userID = userID;
    res.status(200).send(SESSION_LOGGED_IN(userName));
  } else {
    res.status(200).send(SESSION_NOT_LOGGED_IN());
  }
});

// Debug function
app.get('/', (req, res) => {
  res.status(200).send('Hello, world!')
});

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server is up on port ${port}.`)
})
