import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import Header from '../components/header.js'
import Sidebar from '../components/sidebar.js'
import Content from '../components/content.js'

class Tripago extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <Header />
        <Container fluid className="h-100">
          <Row className="h-100">
            <Col xs={4} sm={3} lg={2}>
              <Sidebar />
            </Col>
            <Col xs={8} sm={9} lg={10}>
              <Content />
            </Col>
          </Row>
        </Container>
        
      </BrowserRouter>

    )
  }
}

export default Tripago