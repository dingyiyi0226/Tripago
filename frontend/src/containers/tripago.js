import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom";

import Header from '../components/header.js'
import Sidebar from '../components/sidebar.js'
import Content from '../components/content.js'

class Tripago extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter basename={ process.env.public_URL }>
        <Header />
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-4 col-sm-3 col-lg-2 d-md-block bg-light sidebar">
              <Sidebar />
            </div>
            <div className="col-8 col-sm-9 col-lg-10 px-md-4">
              <Content />
            </div>
          </div>
        </div>
        
      </BrowserRouter>

    )
  }
}

export default Tripago