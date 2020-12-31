import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Container, Row, Col } from 'react-bootstrap'

import './component.css'
import testpic from './testpic.png'
import testpic2 from './testpic2.png'

class AlbumsGallery extends Component {

  constructor(props) {
    super(props)
    this.state = {
      'albumList': ['mytrip1', 'mytrip2', 'mytrip3', 'mytrip4', 'mytrip5']
    }
  }

  render () {
    return (
      <div className="p-4">
        <Container>
          <Row xs={1} sm={2} md={3} lg={4}>
            <Col className="p-3">
              <Card>
                <Card.Img variant="top" src={ testpic } />
                <Card.Body>
                  <Card.Title>Click to Add</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            { this.state.albumList.map(album =>
                <Col className="p-3">
                  <Card as={NavLink} to={`albums/${album}`}>
                    <Card.Img variant="top" src={testpic2} />
                    <Card.Body>
                      <Card.Title>{`${album}`}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              )
            }
          </Row>
        </Container>
      </div>
    )
  }
}

export default AlbumsGallery