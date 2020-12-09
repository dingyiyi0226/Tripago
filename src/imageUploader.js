import React, { Component } from 'react'
import ImageUploadField from "react-images-upload"


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

  render() {
    return (
      <ImageUploadField
        withPreview={true}
        buttonText="Choose images"
        label="Max file size = 5mb"
        onChange={this.onDrop}
        imgExtension={[".jpg", ".gif", ".png"]}
      />
    )
  }
}

export default ImageUploader