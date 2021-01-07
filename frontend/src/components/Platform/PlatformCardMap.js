import React, { Component } from 'react'
import axios from 'axios'
import MarkerClusterer from '@googlemaps/markerclustererplus'
import GoogleMap from 'google-map-react'

import './Platform.css'

const URL_ROOT = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'

const instance = axios.create({
  baseURL: URL_ROOT
})

const NTULibrary = {lat: 25.0174, lng: 121.5405}

const getInfoWindowString = (photo) => `
  <div class="platform-card-map__info-window">
    <p>${photo.id}</p>
    <img src=${photo.url} alt="">
  </div>`;

class PlatformCardMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetching: true,
      photos: [],  //  Type: [{ id:, url:, location: {_latitude, _longitude}}, ]
      centerPhoto: undefined,
      defaultZoom: 10
    }
  }

  componentDidMount() {
    const { user, album } = this.props
    console.log('cardmap mount')
    const getAlbum = async () => {
      const photos = await instance.get('/platform-album-photos', {params: {user: user, album: album}})
      const coverPhoto = await instance.get('platform-album-coverphoto', {params: {user: user, album: album}})
      console.log(photos.data)
      if (!coverPhoto.data || !coverPhoto.data.location) {
        this.setState({
          fetching: false,
          photos: photos.data,
        })
      }
      else {
        this.setState({
          fetching: false,
          photos: photos.data,
          centerPhoto: coverPhoto.data
        })
      }
    }
    getAlbum()
  }

  renderGoogleApi = (map, maps, photos, centerPhoto) => {  // map is the map instance, maps is the maps API object
    const markers = [];
    const infowindows = [];

    photos.filter( photo => photo.location)
          .forEach( photo => {

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
    const markerCluster = new MarkerClusterer(map, markers, { imagePath: `${process.env.PUBLIC_URL}/images/m` });

    markers.forEach((marker, i) => {
      marker.addListener('click', () => {
        infowindows[i].open(map, marker);
      })
    })
  }

  render () {
    if(this.state.fetching) {
      return <h3>Fetching Photo Locations</h3>
    }
    else {
      const { photos, centerPhoto, defaultZoom } = this.state
      const centerLoc = (!centerPhoto || !centerPhoto.location) ? (
                          NTULibrary
                        ) : (
                          { lat: centerPhoto.location._latitude, lng: centerPhoto.location._longitude }
                        )

      return (
        <div className="platform-card-map">
          <GoogleMap
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
            defaultCenter={centerLoc}
            defaultZoom={defaultZoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({map, maps}) => this.renderGoogleApi(map, maps, photos, centerPhoto)}
          >
          </GoogleMap>
        </div>
      )
    }
  }
}

export default PlatformCardMap