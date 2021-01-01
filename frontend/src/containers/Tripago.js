import React, { Component, useContext } from 'react'  //import useContext preparing for auto-redirection to login page
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from '../components/Header.js'
import Home from '../components/Home.js'
import Albums from '../components/Albums.js'
import Album from '../components/Album'
import Login from '../components/auth/Login'
import Registration from '../components/auth/Registration'
import LoginContext from '../LoginContext.js'

const Tripago = () => {
  const {isLogin, setIsLogin} = useContext(LoginContext);
  if (!isLogin) {
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
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Registration />
        </Route>
      </Switch>
    </BrowserRouter>

  )
}


export default Tripago