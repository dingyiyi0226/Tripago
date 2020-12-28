import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from '../components/Header.js'
import Home from '../components/Home.js'
import Albums from '../components/Albums.js'
import Album from '../components/Album'


class Tripago extends Component {

  render() {
    return (
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/albums">
            <Albums />
          </Route>
          <Route path="/albums/:id">
            <Album />
          </Route>

        </Switch>

      </BrowserRouter>

    )
  }
}

export default Tripago