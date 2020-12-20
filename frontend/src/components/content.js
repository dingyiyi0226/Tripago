import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"

import ImageUploader from './imageUploader.js'
import GoogleMap from './googleMap.js'

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
          <Route path={`/albums/${id}/upload`} component={ImageUploader}/>
          <Route path={`/albums/${id}/map`} component={GoogleMap}/>
        </Switch>
      </div>
    )
  }
}

export default Content