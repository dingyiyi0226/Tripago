import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

import './component.css'
import testpic from './testpic.png'

class ProfileSidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'Ethia Polis',
      userDescription: 'SuperStar',
      userPhoto: testpic
    }
  }

  componentDidMount() {
    const getUserInfo = async () => {
      console.log('getUserInfo')
    }

    getUserInfo()
  }
  
  render () {
    return (
      <div className="p-3">
        <Image src={this.state.userPhoto} fluid rounded className="my-3"/>
        <div className="profile__text px-4">
          <h3 className="py-1">{this.state.userName}</h3>
          <h6>{this.state.userDescription}</h6>
        </div>
      </div>
    )
  }
}

export default ProfileSidebar