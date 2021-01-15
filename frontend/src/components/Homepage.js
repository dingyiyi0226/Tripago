import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { Image, Form, InputGroup } from 'react-bootstrap'

import './component.css'
import searchImage from './search-outline.svg'

class Homepage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      region: '',
      submit: false
    }
  }

  onKeyDown = (e) => {
    if(e.key === 'Enter'){
      this.setState({submit: true})
      e.preventDefault()
    }
  }

  onInputRegion = (e) => {
    this.setState({region: e.target.value})
  }

  onSearch = () => {
    this.setState({region: ''})
  }

  render() {
    const { region } = this.state

    if (this.state.submit) {
      return (
        <Redirect to={{pathname: '/platform', search: `?region=${region}`}} />
      )
    }

    return (
      <div className="homepage">
        <p className="logo-text">Tripago</p>
        <Form>
          <Form.Group controlId="search">
            <InputGroup size="sm">
              <Form.Control type="text" value={region} placeholder="Region" onChange={this.onInputRegion} onKeyDown={this.onKeyDown}/>
              <InputGroup.Append as={NavLink} to={{pathname: '/platform', search: `?region=${region}`}} onClick={this.onSearch}>
                <Image src={searchImage}></Image>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default Homepage
