import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";

import ImageUploader from './imageUploader.js'
import GoogleMap from './googleMap.js'

import './components.css'

class Content extends Component {

  render () {
    return (
      <div className="content__wrapper">
        <div>This is the content</div>
        <Switch>
          <Route path="/imageUploader" component={ImageUploader}/>
          <Route path="/travelMap" component={GoogleMap}/>
        </Switch>
      </div>
    )
  }
}

export default Content