import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { Card, Container, Row, Col } from 'react-bootstrap'

import './component.css'
import testpic from './testpic.png'
import albumDefaultCover from './testpic2.png'

const URL_ROOT = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'

const instance = axios.create({
  baseURL: URL_ROOT
})

class AlbumsGallery extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fetching: true,
      albums: []
    }
  }

  componentDidMount(){
    const getAlbums = async () => {
      const res = await instance.get('/albums')
      console.log(res.data)
      this.setState({
        fetching: false,
        albums: res.data
      })
    }
    getAlbums()
  }

  render () {
    if(this.state.fetching) {
      return <h3>Fetching Photos</h3>
    }
    else {
      return (
        <div className="p-4">
          <Container>
            <Row xs={1} sm={2} md={3} lg={4}>
              <Col className="p-3">
                <Card>
                  <Card.Img variant="top" src={ testpic } />
                  <Card.Footer>Click to Add</Card.Footer>
                </Card>
              </Col>
              { this.state.albums.map(album =>
                  <Col className="p-3" key={album.id}>
                    <Card as={NavLink} to={`albums/${album.id}`}>
                      { !album.coverPhoto || !album.coverPhoto.url ? (
                          <Card.Img variant="top" src={albumDefaultCover} />
                        ) : (
                          <Card.Img variant="top" src={album.coverPhoto.url} />
                        )
                      }
                      <Card.Footer>{album.id}</Card.Footer>
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
}

export default AlbumsGallery