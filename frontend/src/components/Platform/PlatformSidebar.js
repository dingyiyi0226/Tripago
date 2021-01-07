import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Image, Form, InputGroup } from 'react-bootstrap'

import './Platform.css'
import searchImage from './search-outline.svg'

class PlatformSidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      region: '',
      options: ['Taiwan', 'Japan', 'Taipei City', 'Taichung City', 'Tokyo']
    }
  }

  onInputRegion = (e) => {
    this.setState({region: e.target.value})
  }

  onSearch = () => {
    this.setState({region: ''})
  }

  onSelect = (e) => {
    this.setState({region: e.target.id})
  }
 
  render() {
    const { region } = this.state
    return (
      <div className="platform-sidebar position-sticky">
        <p className="pt-3 pb-2 mb-3 border-bottom">Filter</p>
        <Form>
          <Form.Group controlId="region">
            <Form.Label>Region Search</Form.Label>
            <InputGroup size="sm">
              <Form.Control type="text" value={region} placeholder="Region" onChange={this.onInputRegion}/>
              <InputGroup.Append as={NavLink} to={{pathname: '/platform', search: `?region=${region}`}} onClick={this.onSearch}>
                <Image src={searchImage}></Image>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          { this.state.options.map( option => (
              <Form.Check custom type="radio" name="region-radio" id={option} label={option} checked={region===option} onChange={this.onSelect} key={option}/>
            ))
          }
        </Form>
      </div>
    )
  }
}

export default PlatformSidebar