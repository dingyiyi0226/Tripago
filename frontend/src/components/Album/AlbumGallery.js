import React, { Component } from 'react'
import axios from 'axios'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'

import './Album.css'

const URL_ROOT = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'

const instance = axios.create({
  baseURL: URL_ROOT
})

class AlbumGallery extends Component {

  constructor(props){
    super(props)
    this.state = {
      fetching: true,
      photos: []  //  Type: [{ id:, url:, location: }, ]
    }
  }

  componentDidMount(){
    const getAlbum = async () => {
      const res = await instance.get('/album', { params: {album: this.props.id}})
      this.setState({
        fetching: false,
        photos: res.data
      })
      // console.log(res.data)
    }
    getAlbum()
  }

  onDeletePhoto = async (id) => {
    // console.log('ondeletePhoto', id)
    const res = await instance.delete('/photo', {params: {album: this.props.id, photo: id}})
    this.setState( state => ({
      photos: state.photos.filter( photo => photo.id !== id)
    }))
  }

  render() {
    if(this.state.fetching) {
      return <h3>Fetching Photos</h3>
    }
    else {
      return (
        <Container>
          <Row xs={1} sm={2} md={3} lg={4}>
            { this.state.photos.map(photo =>
                <Col className="p-3" key={photo.id}>
                  <Card>
                    <Card.Img src={photo.url} />
                    <Card.ImgOverlay>
                      <Button variant="danger" onClick={() => this.onDeletePhoto(photo.id)}> Delete</Button>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              )
            }
          </Row>
        </Container>
      )
    }
  }
}

export default AlbumGallery