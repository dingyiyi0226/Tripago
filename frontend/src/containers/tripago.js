import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom";

import Header from '../components/header.js'
import Sidebar from '../components/sidebar.js'
import Content from '../components/content.js'

import './tripago.css'

class Tripago extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter basename={ process.env.public_URL }>
        <div className="tripago__wrapper">
          <div className="tripago__header">
            <Header />
          </div>
          <div className="tripago__sidebar">
            <Sidebar />
          </div>
          <div className="tripago__content">
            <Content />
          </div>

        </div>
      </BrowserRouter>

    )
  }
}

export default Tripago