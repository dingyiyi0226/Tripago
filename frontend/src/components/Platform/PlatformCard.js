import React, { Component } from 'react'
import axios from 'axios'
import { Button, Card, Image, Media } from 'react-bootstrap'

import CardMap from './PlatformCardMap.js'
import './Platform.css'
import testpic from './testpic.png'

const URL_ROOT = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'

const instance = axios.create({
  baseURL: URL_ROOT,
  withCredentials: true
})

class PlatformCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expand: false,
      address: [],
      profilePic: testpic,
      description: 'No Description'
    }
  }

  componentDidMount() {
    const { user, album } = this.props

    const getDescription = async () => {
      const description = await instance.get('/platform-album-description', {params: {user: user, album: album}})
      if(description.data){
        this.setState({
          description: description.data
        })
      }
    }
    const getAddress = async () => {
      const address = await instance.get('/platform-album-address', {params: {user: user, album: album}})
      // console.log(address.data)
      if(address.data){
        this.setState({
          address: address.data
        })
      }
    }
    const getProfile = async () => {
      // TODO: fetch profile pic
    }

    getDescription()
    getAddress()
    getProfile()
  }

  toggleExpand = () => {
    this.setState( state => ({ expand: !state.expand }))
  }

  render() {
    return (
      <Card className="platform-card">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <p className="region">
            { this.state.address.length ? (
                this.state.address.join(' - ')
              ) : (
                'no location'
              )
            }
          </p>
          <Button variant="info" size='sm' onClick={this.toggleExpand}>
            { this.state.expand ? 'Hide' : 'Expand'}
          </Button>
        </Card.Header>
        <Card.Body>
          <Media>
            <Image src={this.state.profilePic} rounded className="profilePic"/>
            <Media.Body>
              <h5>{this.props.album}</h5>
              { this.state.expand ? (
                  <CardMap user={this.props.user} album={this.props.album}/>
                ) : (
                  <p className="description">{this.state.description}</p>
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