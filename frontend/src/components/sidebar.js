import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

import './components.css'

class Sidebar extends Component {

  render () {
    return (
      <div className="position-sticky pt-3">
        <h5> NTU Travel </h5>
        <Nav className="align-items-start">
          <Nav.Item className="mr-0">
            <Nav.Link as={NavLink} to="/imageUploader">Image Uploader</Nav.Link>
          </Nav.Item>
          <Nav.Item className="mr-0">
            <Nav.Link as={NavLink} to="/travelMap">Travel Map</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    )
  }
}

export default Sidebar