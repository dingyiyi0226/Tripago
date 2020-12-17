import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

class Header extends Component {

  render () {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <a className="navbar-brand" href="/">Tripago
        </a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">yeah</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header