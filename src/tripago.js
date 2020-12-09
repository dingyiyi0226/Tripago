import React, { Component } from 'react'

import Header from './header.js'
import ImageUploader from './imageUploader.js'

class Tripago extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <ImageUploader />
      </React.Fragment>

    )
  }
}

export default Tripago