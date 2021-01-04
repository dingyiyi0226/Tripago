import React, { useContext } from 'react'  //import useContext preparing for auto-redirection to login page
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from '../components/Header.js'
import Home from '../components/Home.js'
import Albums from '../components/Albums.js'
import Album from '../components/Album'
import AlbumCreation from '../components/AlbumCreation.js'
import Login from '../components/auth/Login'
import Registration from '../components/auth/Registration'
import LoginContext from '../LoginContext.js'
import Platform from '../components/Platform'

const Tripago = () => {
  const {loginStatus, setloginStatus} = useContext(LoginContext);
  if (!loginStatus.isLogin) {
    return (
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <Header />
        <Switch>
        <Route path="/register">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
      </BrowserRouter>
      );
  }
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