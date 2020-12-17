import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

class Header extends Component {

  render () {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <a className="navbar-brand" href={process.env.PUBLIC_URL}>Tripago
        </a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href={process.env.PUBLIC_URL}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={process.env.PUBLIC_URL}>yeah</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header