import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

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
      </Navbar>
    )
  }
}

export default Header
