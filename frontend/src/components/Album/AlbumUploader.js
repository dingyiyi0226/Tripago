import React, { Component } from 'react'
import axios from 'axios'
import ImageUploadField from 'react-images-upload'
import { Button } from 'react-bootstrap'

import './Album.css'

const URL_ROOT = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'


const imageUploadInstance = axios.create({
  baseURL: URL_ROOT,
  headers: {'content-type': 'multipart/form-data'}
})

class AlbumUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],  // Type: [File,]
      key: 0
    };
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

    let res = await imageUploadInstance.post('/upload-photos', formdata)
    console.log(res)
    this.setState( state => ({
      photos: [],
      key: state.key+1
    }));
  }

  render() {
    return (
      <React.Fragment>
        <ImageUploadField key={this.state.key}
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