import react, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

import './component.css'

const URL_ROOT = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'

const instance = axios.create({
  baseURL: URL_ROOT
})

class AlbumCreation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submit: false,
      albumName: '',
      albumDescription: ''
    }
  }

  onChange = (e) => {
    const { id, value } = e.target
    // console.log([id], value)
    this.setState({ [id]: value })
  }

  onSubmit = (event) => {
    console.log('onSubmit')
    event.preventDefault()
    const { albumName, albumDescription } = this.state

    // TODO: Submit to backend

    this.setState({ submit: true })
  }

  render() {

    if (this.state.submit) {
      return (
        <Redirect to={`/albums/${this.state.albumName}`} />
      )
    }
    else {
      return (
        <Form validated className="album-creation" onSubmit={this.onSubmit}>
          <Form.Group controlId="albumName">
            <Form.Label>Album Name</Form.Label>
            <Form.Control type="text" placeholder="Album name" onChange={this.onChange} required/>
            <Form.Control.Feedback type="invalid">Please input the album name</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="albumDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description of this album" onChange={this.onChange}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )
    }
  }
}

export default AlbumCreation
