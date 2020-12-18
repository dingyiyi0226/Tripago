import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

class Header extends Component {

  render () {
    return (
      <Navbar variant="dark" bg="primary">
        <Navbar.Brand href={ process.env.PUBLIC_URL }>Tripago</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href={ process.env.PUBLIC_URL }>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href={ process.env.PUBLIC_URL }>yeah</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    )
  }
}

export default Header