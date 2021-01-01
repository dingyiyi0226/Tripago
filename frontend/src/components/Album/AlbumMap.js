import React, { Component } from 'react'
import axios from 'axios'
import GoogleMap from 'google-map-react'

import './Album.css'

const URL_ROOT = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'

const instance = axios.create({
  baseURL: URL_ROOT
})

const NTULibrary = {lat: 25.0174, lng: 121.5405}
const NTUSportsCenter = {lat: 25.0222, lng: 121.5354}
const NTUCommon = {lat: 25.0160, lng: 121.5375}

const PLACES = [
  {name: 'NTUSportsCenter', 'location': NTUSportsCenter},
  {name: 'NTUCommon', 'location': NTUCommon},
]

const getInfoWindowString = (photo) => `
  <div class="info-window">
    <p>${photo.id}</p>
    <img src=${photo.url} alt="">
  </div>`;

class AlbumMap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      places: PLACES,
      fetching: true,
      photos: []  //  Type: [{ id:, url:, location: {_latitude, _longitude}}, ]
    }
  }

  componentDidMount() {
    const getAlbum = async () => {
      const res = await instance.get('/albumphotos', { params: {album: this.props.id}})
      this.setState({
        fetching: false,
        photos: res.data
      })
    }
    getAlbum()
  }

  renderGoogleApi = (map, maps, photos) => {  // map is the map instance, maps is the maps API object
    const markers = [];
    const infowindows = [];

    photos.forEach( photo => {
      console.log(photo.id)
      markers.push(new maps.Marker({
        position: {
          lat: photo.location._latitude,
          lng: photo.location._longitude,
        },
        map,
      }))
      infowindows.push(new maps.InfoWindow({
        content: getInfoWindowString(photo),
      }))
    })

    markers.forEach((marker, i) => {
      marker.addListener('click', () => {
        infowindows[i].open(map, marker);
      })
    })
  }

  render () {
    const { photos } = this.state

    if(this.state.fetching) {
      return <h3>Fetching Photo Locations</h3>
    }
    else {
      return (
        <div className="album-map">
          <GoogleMap
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
            defaultCenter={NTULibrary}
            defaultZoom={15}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({map, maps}) => this.renderGoogleApi(map, maps, photos)}
          >
          </GoogleMap>
        </div>
      )
    }
  }
}

export default AlbumMap