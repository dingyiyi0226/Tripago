import React, { Component } from 'react'
import axios from 'axios'
import ImageUploadField from 'react-images-upload'
import { Button } from 'react-bootstrap'

import './Album.css'

const URL_ROOT = 'http://localhost:4000'
// const URL_ROOT = 'https://my-tripago.an.r.appspot.com' // GCP App Engine URL

const imageUploadInstance = axios.create({
  baseURL: URL_ROOT,
  headers: {'content-type': 'multipart/form-data'}
})

class AlbumUploader extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] }; // type: [File,]
  }

  onDrop = (pictureFiles, pictureDataURLs) => {
    this.setState(state => ({
      photos: state.photos.concat(pictureFiles)
    }));
  }

  onUpload = async () => {
    console.log('upload photos to backend')

    const formdata = new FormData()
    formdata.append('album', this.props.id)
    this.state.photos.forEach( (photo, index) => {
      formdata.append('photos', photo)
    })

    let res = imageUploadInstance.post('/photos', formdata)
  }

  render() {
    return (
      <React.Fragment>
        <ImageUploadField
          withPreview={true}
          buttonText="Choose photos"
          label="Max file size = 5mb"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png"]}
          buttonClassName="album-uploader__button"
        />
        <Button onClick={() => this.onUpload()}>Upload</Button>
      </React.Fragment>
    )
  }
}

export default AlbumUploader