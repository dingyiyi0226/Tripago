import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import testpic from './testpic.png'

class AlbumsContent extends Component {
  
  render () {
    return (
      <div className="p-4">
        <Card as={NavLink} to="albums/mytrip1" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={testpic} />
          <Card.Body>
            <Card.Title>MyTrip1</Card.Title>
            <Card.Text>
              This is MyTrip1 description. This is MyTrip1 description. This is MyTrip1 description.
            </Card.Text>
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default AlbumsContent