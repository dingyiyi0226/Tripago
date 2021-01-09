import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

import './Album.css'

const URL_ROOT = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'

const instance = axios.create({
  baseURL: URL_ROOT,
  withCredentials: true
})


class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: ''
    }
  }

  componentDidMount(){
    const getAlbumDescription = async () => {

      const description = await instance.get('album-description', { params: {album: this.props.id}})
      console.log(description)
      if (description.data) {
        this.setState({
          description: description.data
        })
      }
    }
    getAlbumDescription()
  }

  render() {
    const { id } = this.props

    return (
      <div className="position-sticky pt-3">
        <Nav className="flex-column align-items-start">
          <Nav.Item as='h5' className="mr-0">
            <Nav.Link as={NavLink} to={`/albums/${id}/`}>{id.toUpperCase()}</Nav.Link>
          </Nav.Item>
          <Nav.Item className="mr-0">
            <Nav.Link as='p' className="m-0 sidebar__description">{this.state.description}</Nav.Link>
          </Nav.Item>
          <Nav.Item className="mr-0">
            <Nav.Link as={NavLink} to={`/albums/${id}`}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item className="mr-0">
            <Nav.Link as={NavLink} to={`/albums/${id}/upload`}>Image Uploader</Nav.Link>
          </Nav.Item>
          <Nav.Item className="mr-0">
            <Nav.Link as={NavLink} to={`/albums/${id}/map`}>Travel Map</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    )
  }
}

export default Sidebar