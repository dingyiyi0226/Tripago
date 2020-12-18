import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"

import ImageUploader from './imageUploader.js'
import GoogleMap from './googleMap.js'

class Content extends Component {

  render () {
    return (
      <div className="h-100">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <Switch>
            <Route exact path="/" >Home</Route>
            <Route path="/imageUploader" >Image Uploader</Route>
            <Route path="/travelMap" >Travel Map</Route>
          </Switch>
        </div>
        <Switch>
          <Route path="/imageUploader" component={ImageUploader}/>
          <Route path="/travelMap" component={GoogleMap}/>
        </Switch>
      </div>
    )
  }
}

export default Content