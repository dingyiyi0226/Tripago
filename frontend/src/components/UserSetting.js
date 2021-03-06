import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Button, Image, Form } from 'react-bootstrap'

import './component.css'

const URL_ROOT = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'

const imageUploadInstance = axios.create({
  baseURL: URL_ROOT,
  headers: {'content-type': 'multipart/form-data'},
  withCredentials: true
})

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

    const { userDescription, userPhoto } = this.state

    const formdata = new FormData()
    formdata.append('photo', userPhoto)
    formdata.append('description', userDescription)
    let res = await imageUploadInstance.post('/user-settings', formdata)
    // console.log(res)
    this.setState({
      userDescription: '',
      userPhoto: undefined,
      photoPreviewUrl: undefined
    })
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default UserSetting