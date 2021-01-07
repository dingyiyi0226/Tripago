import React, { Component } from 'react'
import { Button, Card, Image, Media } from 'react-bootstrap'

import CardMap from './PlatformCardMap.js'
import './Platform.css'
import testpic from './testpic.png'

class PlatformCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expand: false,
      region: 'Japan',
      profilePic: testpic,
      album: {
        id: 'MyTrip2',
        description: 'This is mytrip2 description.'
      }
    }
  }

  toggleExpand = () => {
    this.setState( state => ({ expand: !state.expand }))
  }

  render() {
    return (
      <Card className="platform-card">
        <Card.Header className="d-flex justify-content-between align-items-center">
          {this.props.user}
          <Button variant="info" size='sm' onClick={this.toggleExpand}>
            { this.state.expand ? 'Hide' : 'Expand'}
          </Button>
        </Card.Header>
        <Card.Body>
          <Media>
            <Image src={this.state.profilePic} rounded />
            <Media.Body>
              <h5>{this.props.album}</h5>
              { this.state.expand ? (
                  <CardMap />
                ) : (
                  <p>{this.state.album.description}</p>
                )
              }
            </Media.Body>
          </Media>
        </Card.Body>
      </Card>
    )
  }
}

export default PlatformCard