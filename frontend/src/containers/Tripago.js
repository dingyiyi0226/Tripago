import React, { useContext } from 'react'  //import useContext preparing for auto-redirection to login page
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from '../components/Header.js'
import Homepage from '../components/Homepage.js'
import Home from '../components/Home.js'
import Albums from '../components/Albums.js'
import Album from '../components/Album'
import AlbumCreation from '../components/AlbumCreation.js'
import Login from '../components/auth/Login'
import Registration from '../components/auth/Registration'
// import {checkLoginStatus} from '../components/auth/authenticate'
import LoginContext from '../LoginContext.js'
import Platform from '../components/Platform'

const Tripago = () => {
  const { loginStatus } = useContext(LoginContext);
  console.log('@Tripago',loginStatus)

  if (!loginStatus.isLogin) {
    console.log('Tripago rendered, not logged in')
    return (
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/platform">
            <Platform />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
      );
  }
  console.log('Tripago rendered, logged in')
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Homepage />
        </Route>
        <Route path="/map">
          <Home />
        </Route>
        <Route exact path="/albums">
          <Albums />
        </Route>
        <Route path="/albums/:id">
          <Album />
        </Route>
        <Route path="/albumcreation">
          <AlbumCreation />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Registration />
        </Route>
        <Route path="/platform">
          <Platform />
        </Route>
      </Switch>
    </BrowserRouter>

  )
}


export default Tripago