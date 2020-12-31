import React, { Component } from 'react'
import axios from 'axios'
import { Card, Container, Row, Col } from 'react-bootstrap'

const URL_ROOT = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'

const instance = axios.create({
  baseURL: URL_ROOT
})

class AlbumGallery extends Component {

  constructor(props){
    super(props)
    this.state = {
      fetching: true,
      photos: []  //  Type: [{ url:, location: }, ]
    }
  }

  componentDidMount(){
    const getPhotos = async () => {
      const res = await instance.post('/get-photos', {album: this.props.id})
      this.setState({
        fetching: false,
        photos: res.data
      })
      console.log(res.data)
    }
    getPhotos()
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
                <Col className="p-3">
                  <Card>
                    <Card.Img variant="top" src={photo.url} />
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