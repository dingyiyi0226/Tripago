import React, { Component } from 'react'
import axios from 'axios'
import MarkerClusterer from '@googlemaps/markerclustererplus'
import GoogleMap from 'google-map-react'

import './component.css'

const NTULibrary = {lat: 25.0174, lng: 121.5405}

const URL_ROOT = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'
const instance = axios.create({
  baseURL: URL_ROOT
})

const getInfoWindowString = (album) => `
  <div class="travel-map__info-window">
    <p>${album.id}</p>
    <img src=${album.coverPhoto.url} alt="">
  </div>`;

class TravelMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetching: true,
      albums: [],
      mapCenter: NTULibrary
    }
  }

  componentDidMount() {
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
  
  renderGoogleApi = (map, maps, albums) => {  // map is the map instance, maps is the maps API object
    const markers = [];
    const infowindows = [];

    albums.filter(album => album.coverPhoto && album.coverPhoto.location)
          .forEach(album => {
      markers.push(new maps.Marker({
        position: {
          lat: album.coverPhoto.location._latitude,
          lng: album.coverPhoto.location._longitude,
        },
        map,
      }))
      infowindows.push(new maps.InfoWindow({
        content: getInfoWindowString(album),
      }))
    })
    const markerCluster = new MarkerClusterer(map, markers, { imagePath: `${process.env.PUBLIC_URL}/images/m` });
    
    markers.forEach((marker, i) => {
      marker.addListener('click', () => {
        infowindows[i].open(map, marker);
      })
    })
  }

  render () {
    if(this.state.fetching) {
      return <h3 className="fetching-text">Fetching Albums</h3>
    }
    else {
      return (
        <div className="p-4 travel-map__container">
          <div className="travel-map">
            <GoogleMap
              bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
              defaultCenter={this.state.mapCenter}
              defaultZoom={5}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({map, maps}) => this.renderGoogleApi(map, maps, this.state.albums)}
            >
            </GoogleMap>
          </div>
        </div>
      )
    }
  }
}

export default TravelMap