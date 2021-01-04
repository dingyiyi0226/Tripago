import React, { Component } from 'react'

import PlatformCard from './PlatformCard.js'
import './Platform.css'


class Content extends Component {

  render() {
    return (
      <div className="h-100">
        <p className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          Platform content
        </p>
        <div className="platform">
          <PlatformCard />
          <PlatformCard />
          <PlatformCard />

        </div>
      </div>
    )
  }
}

export default Content