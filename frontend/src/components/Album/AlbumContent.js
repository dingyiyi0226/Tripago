import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"

import AlbumGallery from './AlbumGallery.js'
import AlbumUploader from './AlbumUploader.js'
import AlbumMap from './AlbumMap.js'

class Content extends Component {

  render() {
    const { id } = this.props

    return (
      <div className="h-100">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <Switch>
            <Route exact path={`/albums/${id}/`} >Album - {id}</Route>
            <Route path={`/albums/${id}/upload`} >Image Uploader</Route>
            <Route path={`/albums/${id}/map`} >Travel Map</Route>
          </Switch>
        </div>
        <Switch>
          <Route exact path={`/albums/${id}`}>
            <AlbumGallery id={id}/>
          </Route>
          <Route path={`/albums/${id}/upload`}>
            <AlbumUploader id={id}/>
          </Route>
          <Route path={`/albums/${id}/map`}>
            <AlbumMap id={id}/>
          </Route>
        </Switch>
      </div>
    )
  }
}

export default Content