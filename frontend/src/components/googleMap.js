import React, { Component } from 'react'
import axios from 'axios'
import GoogleMap from 'google-map-react'

import './googleMap.css'

const NTULibrary = {lat: 25.0174, lng: 121.5405}
const NTUSportsCenter = {lat: 25.0222, lng: 121.5354}

class googleMap extends Component {
  constructor(props) {
    super(props);

  }

  renderMarkers = (map, maps) => {  // map is the map instance, maps is the maps API object
    let marker = new maps.Marker({
    position: NTUSportsCenter,
    map: map,
    })
  }

  render () {
    return (
      <div className="google-map">
        <GoogleMap
          bootstrapURLKeys={{ key: 'AIzaSyAp6VGqr7L5h4E4D1dTru8rNuS0SZ7KHF4' }}
          defaultCenter={NTULibrary}
          defaultZoom={15}
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals
        >
        {/* Add Custom Markers Here */}
        </GoogleMap>
      </div>
    )
  }
}

export default googleMap