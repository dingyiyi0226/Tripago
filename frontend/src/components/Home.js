import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import ProfileSidebar from './ProfileSidebar.js'
import TravelMap from './TravelMap.js'

class Home extends Component {
  
  render () {
    return (
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col xs={4} lg={3}>
            <ProfileSidebar />
          </Col>
          <Col xs={8} lg={9}>
            <TravelMap />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home