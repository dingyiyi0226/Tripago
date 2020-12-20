import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

import './Album.css'

class Sidebar extends Component {

  render() {
    const { id } = this.props

    return (
      <div className="position-sticky pt-3">
        <Nav className="align-items-start">
          <Nav.Item as='h5' className="mr-0">
            <Nav.Link as={NavLink} to={`/albums/${id}/`}>{id.toUpperCase()}</Nav.Link>
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