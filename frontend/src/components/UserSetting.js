import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Button, Image, Form } from 'react-bootstrap'

import './component.css'

class UserSetting extends Component {

  constructor(props){
    super(props)
    this.state = {
      userDescription: '',
      userPhoto: undefined,
      photoPreviewUrl: undefined
    }
  }

  onPhotoUpload = (e) => {
    const photoFile = e.target.files[0]
    console.log('upload photo', photoFile)
    const photoPreviewURL = URL.createObjectURL(photoFile)
    this.setState({
      userPhoto: photoFile,
      photoPreviewUrl: photoPreviewURL
    })
  }

  onChange = (e) => {
    const { id, value } = e.target
    // console.log([id], value)
    this.setState({ [id]: value })
  }

  onSubmit = async (e) => {
    console.log('onSubmit')
    e.preventDefault()
    const { userDescription } = this.state

    // try {
    //   const res = await instance.post('/album-create', {
    //     albumName: albumName,
    //     albumDescription: albumDescription
    //   })
    //   this.setState({ submit: true })
    // }
    // catch {
    //   console.log('album already exists')
    //   this.setState({
    //     albumName: '',
    //     albumDescription: '',
    //     showAlert: true
    //   })
    // }
  }

  render(){
    return (
      <div className="user-setting">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="userPhoto">
            <Form.Label>Profile Photo</Form.Label>
            { this.state.photoPreviewUrl ? (
                <Image src={this.state.photoPreviewUrl} className="photo-preview" rounded/>
              ) : ( null )
            }
            <Form.File
              id="user-photo"
              label={this.state.userPhoto ? this.state.userPhoto.name : 'Choose Photo'}
              accept=".png,.jpeg,.jpg,.JPG,.gif"
              custom
              onChange={this.onPhotoUpload}
            />
          </Form.Group>
          <Form.Group controlId="userDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={this.state.userDescription} placeholder="Description of the user" onChange={this.onChange}/>
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    )
  }
}

export default UserSetting