import React, { Component } from 'react'
import axios from 'axios'
import MarkerClusterer from '@googlemaps/markerclustererplus'
import GoogleMap from 'google-map-react'

import './Album.css'

const URL_ROOT = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'

const instance = axios.create({
  baseURL: URL_ROOT
})

const NTULibrary = {lat: 25.0174, lng: 121.5405}

const getInfoWindowString = (photo) => `
  <div class="album-map__info-window">
    <p>${photo.id}</p>
    <img src=${photo.url} alt="">
  </div>`;

class AlbumMap extends Component {
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
    const centerPhotoId = this.props.location.hash.slice(1)

    const getAlbum = async () => {
      const photos = await instance.get('/album-photos', { params: {album: this.props.id}})

      if (centerPhotoId){
        const centerPhoto = photos.data.find(photo => photo.id === centerPhotoId)
        this.setState({
          fetching: false,
          photos: photos.data,
          centerPhoto: centerPhoto,
          defaultZoom: 14
        })
      }
      else {
        const coverPhoto = await instance.get('album-coverphoto', { params: {album: this.props.id}})
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
    }
    getAlbum()
  }

  renderGoogleApi = (map, maps, photos, centerPhoto) => {  // map is the map instance, maps is the maps API object
    const markers = [];
    const infowindows = [];
    let centerPhotoIndex = undefined;

    photos.filter( photo => photo.location)
          .forEach( (photo, index) => {
      if ( photo.id === centerPhoto.id) {
        centerPhotoIndex = index
      }
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
    if (centerPhotoIndex !== undefined ){
      infowindows[centerPhotoIndex].open(map, markers[centerPhotoIndex]);
    }
  }

  render () {
    const { photos, centerPhoto, defaultZoom } = this.state
    console.log('centerphoto', centerPhoto)
    const centerLoc = (!centerPhoto || !centerPhoto.location) ? (
                        NTULibrary
                      ) : (
                        { lat: centerPhoto.location._latitude, lng: centerPhoto.location._longitude }
                      )

    if(this.state.fetching) {
      return <h3>Fetching Photo Locations</h3>
    }
    else {
      return (
        <div className="album-map">
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

export default AlbumMap