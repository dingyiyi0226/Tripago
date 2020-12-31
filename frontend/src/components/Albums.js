import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Profile from './Profile.js'
import AlbumsGallery from './AlbumsGallery.js'

class Albums extends Component {
  
  render () {
    return (
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col xs={4} lg={3}>
            <Profile />
          </Col>
          <Col xs={8} lg={9}>
            <AlbumsGallery />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Albums