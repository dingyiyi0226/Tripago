import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

import './components.css'

class Sidebar extends Component {

  render () {
    return (
      <div className="position-sticky pt-3 sidebar">
        <h5> NTU Travel </h5>
        <ul className="nav flex-column align-items-start">
          <li className="nav-item mr-0">
            <NavLink to="/imageUploader" className="nav-link">Image Uploader</NavLink>
          </li>
          <li className="nav-item mr-0">
            <NavLink to="/travelMap" className="nav-link">Travel Map</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar