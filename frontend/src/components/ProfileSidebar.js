import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import axios from 'axios'

import './component.css'
import defaultUserPhoto from './testpic.png'

const URL_ROOT = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'
const instance = axios.create({
  baseURL: URL_ROOT,
  withCredentials: true
})

class ProfileSidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      userDescription: '',
      userPhoto: undefined
    }
  }

  componentDidMount() {
    const getUserInfo = async () => {
      await instance
        .get('/profile')
        .then((res) => {
          console.log(res.data)
          this.setState(res.data);
        })
        .catch((err) => {
          console.log('ProfileDidMountError: ', err);
        });
    }
    getUserInfo()
  }
  
  render () {
    return (
      <div className="p-3">
        <Image src={this.state.userPhoto || defaultUserPhoto} fluid rounded className="my-3"/>
        <div className="profile__text px-4">
          <h3 className="py-1">{this.state.userName}</h3>
          <h6>{this.state.userDescription}</h6>
        </div>
      </div>
    )
  }
}

export default ProfileSidebar