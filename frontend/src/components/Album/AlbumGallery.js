import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { Button, Card, Image, Modal, Container, Row, Col } from 'react-bootstrap'

import './Album.css'
import crossImg from './close-circle-outline.svg'

const URL_ROOT = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'

const instance = axios.create({
  baseURL: URL_ROOT
})

function PhotoPreview(props) {
  if (!props.photo) { return null }
  const { id, url } = props.photo
  return (
    <Modal {...props} centered className="preview">
      <Modal.Header closeButton>
        <Modal.Title className="w-75">{id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={url} className="w-100"/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

class AlbumGallery extends Component {

  constructor(props){
    super(props)
    this.state = {
      fetching: true,
      photos: [],  //  Type: [{ id:, url:, location: }, ]
      showPreview: false,
      previewPhoto: undefined
    }
  }

  componentDidMount(){
    const getAlbum = async () => {
      const res = await instance.get('/album-photos', { params: {album: this.props.id}})
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

  onClickImage = (photo) => {
    this.setState({
      showPreview: true,
      previewPhoto: photo
    })
  }

  onHidePreview = () => { this.setState({showPreview: false}) }

  render() {
    if(this.state.fetching) {
      return <h3>Fetching Photos</h3>
    }
    else {
      return (
        <React.Fragment>
          <Container className="album-gallery">
            <Row xs={1} sm={2} md={3} lg={4}>
              { this.state.photos.map(photo =>
                  <Col className="p-3" key={photo.id}>
                    <Card>
                      <Card.Img src={photo.url} onClick={() => {this.onClickImage(photo)}} />
                      <img className="cross" src={crossImg} onClick={() => this.onDeletePhoto(photo.id)}/>
                      { !photo.location ? (
                          <Card.Footer>
                            NO LOCATION INFO
                          </Card.Footer>
                        ) : (
                          <Card.Footer as={NavLink} to={{
                            pathname: `/albums/${this.props.id}/map`,
                            hash: `#${photo.id}`
                          }}>
                            SHOW ON MAP
                          </Card.Footer>
                        )
                      }
                    </Card>
                  </Col>
                )
              }
            </Row>
          </Container>
          <PhotoPreview
            show={this.state.showPreview}
            onHide={this.onHidePreview}
            photo={this.state.previewPhoto}
          />
        </React.Fragment>
      )
    }
  }
}

export default AlbumGallery