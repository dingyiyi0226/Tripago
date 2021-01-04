import React, { Component } from 'react'
import { Image, Form, InputGroup } from 'react-bootstrap'

import './Platform.css'
import searchImage from './search-outline.svg'

class PlatformSidebar extends Component {

  onClick = () => {
    console.log('onclick')
  }
 
  render() {
    return (
      <div className="platform-sidebar position-sticky">
        <p className="pt-3 pb-2 mb-3 border-bottom">Filter</p>
        <Form>
          <Form.Group controlId="region">
            <Form.Label>Region</Form.Label>
            <InputGroup size="sm">
              <Form.Control type="text" placeholder="Taiwan"/>
              <InputGroup.Append onClick={this.onClick}>
                <Image src={searchImage}></Image>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Form.Check custom type="radio" id="taiwan" name="region-radio" label="Taiwan" />
          <Form.Check custom type="radio" id="japan" name="region-radio" label="Japan" />
        </Form>
      </div>
    )
  }
}

export default PlatformSidebar