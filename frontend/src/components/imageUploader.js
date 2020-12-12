import React, { Component } from 'react'
import axios from 'axios'
import ImageUploadField from "react-images-upload"

import './components.css'

const URL_ROOT = 'http://localhost:4000'
// const URL_ROOT = 'https://abiding-kingdom-298117.an.r.appspot.com' // GCP App Engine URL

const instance = axios.create({
  baseURL: URL_ROOT
})

class ImageUploader extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] }; // type: [File,]
  }

  onDrop = (pictureFiles, pictureDataURLs) => {
    this.setState(state => ({
      pictures: state.pictures.concat(pictureFiles)
    }));
  }

  onUpload = async () => {
    console.log('upload images to backend')


    let res = await instance.post('/upload', {'data': 'testmsg'})
    console.log(res)
  }

  render() {
    return (
      <React.Fragment>
        <ImageUploadField
          withPreview={true}
          buttonText="Choose images"
          label="Max file size = 5mb"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png"]}
          buttonClassName="image-uploader__button"
        />
        <button className="image-upload-button" onClick={() => this.onUpload() }>Upload</button>
      </React.Fragment>
    )
  }
}

export default ImageUploader