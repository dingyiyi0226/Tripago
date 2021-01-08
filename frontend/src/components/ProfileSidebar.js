import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

import './component.css'
import testpic from './testpic.png'

class ProfileSidebar extends Component {
  
  render () {
    return (
      <div className="p-3">
        <Image src={testpic} fluid rounded className="my-3"/>
        <div className="profile__text px-4">
          <h3 className="py-1">Ethia Polis</h3>
          <h6>#SuperStar</h6>
          <h6>#Star4Real</h6>
          <h6>#StarFish</h6>
        </div>
      </div>
    )
  }
}

export default ProfileSidebar