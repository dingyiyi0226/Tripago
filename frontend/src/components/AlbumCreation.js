import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Alert, Button, Form } from 'react-bootstrap'

import './component.css'

const URL_ROOT = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'

const instance = axios.create({
  baseURL: URL_ROOT,
  withCredentials: true
})

class AlbumCreation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submit: false,
      albumName: '',
      albumDescription: '',
      showAlert: false
    }
  }

  onChange = (e) => {
    const { id, value } = e.target
    // console.log([id], value)
    this.setState({ [id]: value })
  }

  onSubmit = async (e) => {
    // console.log('onSubmit')
    e.preventDefault()
    const { albumName, albumDescription } = this.state

    try {
      const res = await instance.post('/album-create', {
        albumName: albumName,
        albumDescription: albumDescription
      })
      this.setState({ submit: true })
    }
    catch {
      console.log('album already exists')
      this.setState({
        albumName: '',
        albumDescription: '',
        showAlert: true
      })
    }
  }

  onCloseAlert = () => {
    this.setState({ showAlert: false })
  }

  render() {
    if (this.state.submit) {
      return (
        <Redirect to={`/albums/${this.state.albumName}`} />
      )
    }
    else {
      return (
        <div className="album-creation">
          <Alert variant="danger" show={this.state.showAlert} onClose={this.onCloseAlert} dismissible>
            Album already exists.
          </Alert>
          <Form validated onSubmit={this.onSubmit}>
            <Form.Group controlId="albumName">
              <Form.Label>Album Name</Form.Label>
              <Form.Control type="text" value={this.state.albumName} placeholder="Album name" onChange={this.onChange} required/>
              <Form.Control.Feedback type="invalid">Please input the album name</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="albumDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" value={this.state.albumDescription} placeholder="Description of this album" onChange={this.onChange}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      )
    }
  }
}

export default AlbumCreation
