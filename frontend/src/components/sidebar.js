import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

import './components.css'

class Sidebar extends Component {

  render () {
    return (
      <div className="sidebar__wrapper">
        <p> My Trip 1 </p>
        <ul>
          <li><NavLink to="/imageUploader">Image Uploader</NavLink></li>
          <li><NavLink to="/travelMap">Travel Map</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default Sidebar