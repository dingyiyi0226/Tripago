import React, { Component } from 'react'
import axios from 'axios'
import GoogleMap from 'google-map-react'

import './Album.css'

const NTULibrary = {lat: 25.0174, lng: 121.5405}
const NTUSportsCenter = {lat: 25.0222, lng: 121.5354}
const NTUCommon = {lat: 25.0160, lng: 121.5375}

const PLACES = [
  {name: 'NTUSportsCenter', 'location': NTUSportsCenter},
  {name: 'NTUCommon', 'location': NTUCommon},
]

const getInfoWindowString = (place) => `
  <div class="info-window">
    <div class="place-name">
      ${place.name}
    </div>
  </div>`;

class AlbumMap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      places: PLACES,
    }
  }

  renderGoogleApi = (map, maps, places) => {  // map is the map instance, maps is the maps API object
    const markers = [];
    const infowindows = [];

    places.forEach((place) => {
      markers.push(new maps.Marker({
        position: {
          lat: place.location.lat,
          lng: place.location.lng,
        },
        map,
      }))
      infowindows.push(new maps.InfoWindow({
        content: getInfoWindowString(place),
      }))
    })

    markers.forEach((marker, i) => {
      marker.addListener('click', () => {
        infowindows[i].open(map, marker);
      })
    })
  }

  render () {
    const { places } = this.state
    
    return (
      <div className="album-map">
        <GoogleMap
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={NTULibrary}
          defaultZoom={15}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({map, maps}) => this.renderGoogleApi(map, maps, places)}
        >
        </GoogleMap>
      </div>
    )
  }
}

export default AlbumMap