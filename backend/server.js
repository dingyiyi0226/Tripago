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
app.set('trust proxy', true);
app.use(
  session({
    store: new FirestoreStore({
      dataset: new Firestore(),
      kind: 'express-sessions',
    }),
    secret: 'su35/3wu0 m, cjo4',
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: 'None',
      secure: true
    }
  })
);

const storage = multer.memoryStorage();
const cloudStorage = new Storage();
const cloudBucket = cloudStorage.bucket(process.env.GCLOUD_STORAGE_BUCKET);
const firestore = new Firestore();

const ALL_USERS_COLLECTION = 'all-users';

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

const NOT_LOGGED_IN = () => {
  return {
    status: SESSION_NOT_LOGGED_IN(),
    message: 'Wrong email or password'
  }
};

const REGISTRATION_FAIL = () => {
  return {
    status: SESSION_NOT_LOGGED_IN(),
    message: 'Email already exists'
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

app.get('/profile', async (req, res) => { //compatible with session
  const userID = req.session.userID;
  console.log('profile', req.session)
  const userPhoto = './testpic.png'; //tmp
  if (userID) {
    const userDoc = await firestore
      .collection(ALL_USERS_COLLECTION)
      .doc(userID)
      .get();
    const userName = userDoc.data().name;
    const userDescription = userDoc.data().description;
    res.status(200).send({
      userName: userName,
      userDescription: userDescription,
      userPhoto: userPhoto
    });
  } else {
    res.status(404).send('USER NOT FOUND')
  }
});

app.get('/albums', async (req, res) => { //compatible with session
  const userID = req.session.userID
  console.log('albums', req.session)
  // const albumsSnapshot = await firestore.collection(`users/${USER}/albums`).get()
  const albumsSnapshot = await firestore.collection(`all-users/${userID}/albums`).get()
  const albums = []
  albumsSnapshot.forEach( album => {
    albums.push({id: album.id, ...album.data()})
  })
  res.status(200).send(albums)
})

app.delete('/album', async (req, res) => { //compatible with session
  const { album } = req.query
  const userID = req.session.userID

  const photoDoc = await firestore.doc(`all-users/${userID}/albums/${album}`);

  await cloudBucket.deleteFiles({
    force: true,
    prefix: `${userID}/${album}/`
  })

  await photoDoc.delete()
  console.log('finish delete', album)

  res.status(200).send()
})

app.post('/album-create', async (req, res) => { //compatible with session
  const { albumName, albumDescription } = req.body
  const userID = req.session.userID
  // const albumRef = await firestore.doc(`users/${USER}/albums/${albumName}`)
  const albumRef = await firestore.doc(`all-users/${userID}/albums/${albumName}`)
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

app.get('/album-photos', async (req, res) => { //compatible with session
  const { album } = req.query
  const userID = req.session.userID

  const photosSnapshot = await firestore.collection(`all-users/${userID}/albums/${album}/photos`).get()
  const photos = []
  photosSnapshot.forEach( photo => {
    photos.push({id: photo.id, ...photo.data()})
  })
  res.status(200).send(photos)
})

app.get('/album-coverphoto', async (req, res) => { //compatible with session
  const { album } = req.query
  const userID = req.session.userID
  const coverPhotoSnapshot = await firestore.doc(`all-users/${userID}/albums/${album}`).get()

  if (coverPhotoSnapshot.data() && coverPhotoSnapshot.data().coverPhoto) {
    res.status(200).send(coverPhotoSnapshot.data().coverPhoto)
  }
  else {
    res.status(200).send()
  }
})

app.get('/album-description', async (req, res) => { //compatible with session
  const { album } = req.query
  const userID = req.session.userID
  const albumSnapshot = await firestore.doc(`all-users/${userID}/albums/${album}`).get()

  if (albumSnapshot.data() && albumSnapshot.data().description) {
    res.status(200).send(albumSnapshot.data().description)
  }
  else {
    res.status(200).send()
  }
})


app.delete('/photo', async (req, res) => { //compatible with session
  const { album, photo } = req.query
  const userID = req.session.userID

  const photoFile = await cloudBucket.file(`${userID}/${album}/${photo}`);
  const photoDoc = await firestore.doc(`all-users/${userID}/albums/${album}/photos/${photo}`);

  await photoFile.delete()
  await photoDoc.delete()
  // console.log('finish delete', album, photo)

  await updateAlbumCoverPhoto(userID, album)

  res.status(200).send()

})


app.post('/upload-photos', upload.array('photos', MAX_FILE), async (req, res, next) => { //compatible with session
  if (!req.files.length){
    console.log('error')
    res.status(400).send({ message: 'No file uploaded' })
  }

  // console.log('success')
  const userID = req.session.userID
  const { album } = JSON.parse(JSON.stringify(req.body))
  console.log(userID, album, req.files.length)

  for (let file of req.files) {
    // Should the server response to client immediatly or await photo upload to db or not ?
    await photoProcessing(file, userID, album)
      .catch('fuck here')
  }
  await updateAlbumCoverPhoto(userID, album)
  res.status(200).send();
})

//platform
app.get('/platform', async (req, res) => {  // i guess it works now
  let { region } = req.query
  if (region){
    region = region.toLowerCase()
  }
  console.log(region)

  let users = []
  let validAlbums = []

  const usersSnapshot = await firestore.collection('all-users').get();
  usersSnapshot.forEach( userDoc => {
    users.push({id: userDoc.id, name: userDoc.data().name});
  });
  // console.log('users', users);

  if (region) {
    const regionPath = new FieldPath('coverPhoto', 'address')
    for (let user of users) {
      const albumsSnapshot = await firestore.collection(`all-users/${user.id}/albums`)
                                     .where( regionPath, 'array-contains', region).get()
      albumsSnapshot.forEach( album => {
        validAlbums.push({user: user.name, albumName: album.id})
      })
    }
  }
  else {
    const regionPath = new FieldPath('coverPhoto', 'address')
    for (let user of users) {
      const albumsSnapshot = await firestore.collection(`all-users/${user.id}/albums`).get()
      albumsSnapshot.forEach( album => {
        validAlbums.push({user: user.name, albumName: album.id})
      })
    }
  }
  // console.log(validAlbums)
  res.status(200).send(validAlbums)
})

app.get('/platform-album-description', async (req, res) => {
  const { user, album } = req.query
  console.log('req:', req.query);

  const userDoc = await firestore
    .collection('all-users')
    .where('name', '==', user)
    .get();
  let userID = undefined;
  userDoc.forEach(user => {
    userID = user.id;
  });

  const albumSnapshot = await firestore.doc(`all-users/${userID}/albums/${album}`).get()

  if (albumSnapshot.data() && albumSnapshot.data().description) {
    res.status(200).send(albumSnapshot.data().description)
  }
  else {
    res.status(200).send()
  }
})

app.get('/platform-album-address', async (req, res) => {
  const { user, album } = req.query
  const userDoc = await firestore
    .collection('all-users')
    .where('name', '==', user)
    .get();
  let userID = undefined;
  userDoc.forEach(user => {
    userID = user.id;
  });

  const albumSnapshot = await firestore.doc(`all-users/${userID}/albums/${album}`).get()
  // console.log(albumSnapshot.data().coverPhoto.address)
  if (albumSnapshot.data() && albumSnapshot.data().coverPhoto && albumSnapshot.data().coverPhoto.address) {
    res.status(200).send(albumSnapshot.data().coverPhoto.address)
  }
  else {
    res.status(200).send()
  }
})

app.get('/platform-album-coverphoto', async (req, res) => {
  const { user, album } = req.query
  const userDoc = await firestore
    .collection('all-users')
    .where('name', '==', user)
    .get();
  let userID = undefined;
  userDoc.forEach(user => {
    userID = user.id;
  });

  const coverPhotoSnapshot = await firestore.doc(`all-users/${userID}/albums/${album}`).get()

  if (coverPhotoSnapshot.data() && coverPhotoSnapshot.data().coverPhoto) {
    res.status(200).send(coverPhotoSnapshot.data().coverPhoto)
  }
  else {
    res.status(200).send()
  }
})

app.get('/platform-album-photos', async (req, res) => {
  const { user, album } = req.query
  const userDoc = await firestore
    .collection('all-users')
    .where('name', '==', user)
    .get();
  let userID = undefined;
  userDoc.forEach(user => {
    userID = user.id;
  });

  const photosSnapshot = await firestore.collection(`all-users/${userID}/albums/${album}/photos`).get()
  const photos = []
  photosSnapshot.forEach( photo => {
    photos.push({id: photo.id, ...photo.data()})
  })
  res.status(200).send(photos)
})

// Login & Sessions
app.post('/register', async (req, res) => {
  const {email, name, password} = req.body;
  const userDoc = await firestore
    .collection(ALL_USERS_COLLECTION)
    .where('email', '==', email)
    .get();

  let userID = '';
  userDoc.forEach( doc => {
    userID = doc.id;
  });

  if (userID) { // user existed
    console.log('existed userID: ', userID);
    res.status(200).send(REGISTRATION_FAIL());
  } else {
    const userInfoDoc = await firestore
      .collection(ALL_USERS_COLLECTION)
      .doc('info');
    const userInfo = await userInfoDoc.get();
    const lastestID = userInfo.data().lastestID;
    userID = String(1 + Number(lastestID));
    const usersRef = firestore
      .collection(ALL_USERS_COLLECTION)
      .doc(userID);
    const DBres = await usersRef.set({
      email: email,
      name: name,
      password: password,
      description: ""
    }).then(() => {
      userInfoDoc.set({lastestID: userID});
      req.session.userID = userID;
      res.status(200).send(LOGGED_IN(name));
    }).catch((err) => {
      console.log(err);
    })
  }
});

app.post('/login', async (req, res) => {
  console.log('login called')
  const { email, password } = req.body;
  console.log('received: ', email, password);
  const userDoc = await firestore
    .collection(ALL_USERS_COLLECTION)
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
    console.log('login successfully', userID)
    req.session.userID = userID;
    console.log('login successfully session:', req.session)
    res.status(200).send(LOGGED_IN(name));
  } else { // user not found
    console.log('login user not found')
    res.status(200).send(NOT_LOGGED_IN());
  }
});

app.post('/logout', async (req, res) => {
  console.log('logout session', req.session)
  req.session.destroy( err => {
    console.log('logout err', err);
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
    console.log('userID', userID)
    const userDoc = await firestore
      .collection(ALL_USERS_COLLECTION)
      .doc(userID)
      .get();
    const userName = userDoc.data().name;
    console.log('userName:', userName);

    req.session.userID = userID;
    res.status(200).send(SESSION_LOGGED_IN(userName));
  } else {
    console.log('not logged in')
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
