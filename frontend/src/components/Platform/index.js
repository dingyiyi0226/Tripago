import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import PlatformSidebar from './PlatformSidebar.js'
import PlatformQuerybar from './PlatformQuerybar.js'
import Content from './PlatformContent.js'

class Platform extends Component {

  render() {
    return (
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col xs={3} lg={2}>
            <PlatformSidebar />
          </Col>
          <Col xs={6} lg={8}>
            <Content />
          </Col>
          <Col xs={3} lg={2}>
            <PlatformQuerybar />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Platform
