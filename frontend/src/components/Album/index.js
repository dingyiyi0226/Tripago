import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import Sidebar from './AlbumSidebar.js'
import Content from './AlbumContent.js'

function Album() {
  const { id } = useParams();

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col xs={4} sm={3} lg={2}>
          <Sidebar id={id}/>
        </Col>
        <Col xs={8} sm={9} lg={10}>
          <Content id={id}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Album
