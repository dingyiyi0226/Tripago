import React, { Component, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

import LoginContext from '../LoginContext.js'
import { logout } from './auth/authenticate'

const Header = () => {
  const {loginStatus, setLoginStatus} = useContext(LoginContext);

  if (!loginStatus.isLogin) {
    console.log('header rendered, not logged in')
    return (
      <Navbar variant="dark" bg="primary">
        <Navbar.Brand as={NavLink} to="/home">Tripago</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/platform">Platform</Nav.Link>
          </Nav.Item>
        </Nav>

        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/login">Log in</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    )
  }
  else {
    console.log('header rendered, logged in')
    return (
      <Navbar variant="dark" bg="primary">
        <Navbar.Brand as={NavLink} to="/home">Tripago</Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/map">Map</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/albums">Albums</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/platform">Platform</Nav.Link>
          </Nav.Item>
        </Nav>

        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/settings">Settings</Nav.Link>
          </Nav.Item>
          <Nav.Item
            onClick={() => {
              console.log('logout clicked')
              logout();
              setLoginStatus({isLogin: false, userID: ''});
            }}
          >
            <Nav.Link as={NavLink} to="/login">Log out</Nav.Link>
          </Nav.Item>
        </Nav>

      </Navbar>
    )
  }
  
}

export default Header
