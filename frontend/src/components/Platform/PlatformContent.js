import React, { Component } from 'react'

import { Button, Card, Image, Popover, OverlayTrigger } from 'react-bootstrap'

import './Platform.css'
import testpic from './testpic.png'

class Content extends Component {

  render() {
    return (
      <div className="h-100">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          Platform content
        </div>
        <div className="platform">

          <OverlayTrigger
            placement="right-start"
            delay={{ show: 200, hide: 200 }}
            trigger='click'
            overlay={
              <Popover id="popover">
                <Card>
                  <Card.Header>Header</Card.Header>
                  <Card.Body>
                    <Card.Text>this is body lahos eihawoeih p aweoi fahpwo e aw9eurhpawiweauh waehrpw itj</Card.Text>
                  </Card.Body>
                  <Card.Footer>Click to Add</Card.Footer>
                </Card>
              </Popover>
            }
          >
            <Image src={testpic} rounded />
          </OverlayTrigger>
        </div>
      </div>
    )
  }
}

export default Content