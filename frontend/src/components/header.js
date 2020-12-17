import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

class Header extends Component {

  render () {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <a className="navbar-brand" href="/">Tripago
        </a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">yeah</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header