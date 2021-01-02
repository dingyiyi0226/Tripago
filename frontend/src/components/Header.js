import React, { Component, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

import LoginContext from '../LoginContext.js'
import { logout } from './auth/authenticate'

const UserButtons = () => {
  const {isLogin, setIsLogin} = useContext(LoginContext)
  // console.log(isLogin, setIsLogin)

  if (!isLogin) {
    return (
       <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/login">Log in</Nav.Link>
        </Nav.Item>
      </Nav>
      );
  }
  return (
   <Nav className="justify-content-end">
    <Nav.Item 
      onClick={() => {
        console.log('logout clicked')
        logout();
        setIsLogin(false);
    }}>
      <Nav.Link as={NavLink} to="/login">Log out</Nav.Link>
    </Nav.Item>
  </Nav>
  );
};

class Header extends Component {
  render () {
    return (
      <Navbar variant="dark" bg="primary">
        <Navbar.Brand as={NavLink} to="/home">Tripago</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/albums">Albums</Nav.Link>
          </Nav.Item>
        </Nav>
        <UserButtons />
      </Navbar>
    )
  }
}

export default Header
