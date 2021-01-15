import React, { Component, useContext, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { register, login } from './authenticate'
import LoginContext from '../../LoginContext.js'

import './auth.css'

const RegistrationButton = (props) => {
  const {loginStatus, setLoginStatus} = useContext(LoginContext);

  const renderRedirect = () => {
    if(loginStatus.isLogin) {
      console.log('redirect rendered')
      return <Redirect to='/home'/>;
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (props.unmatchedPwd) {
      props.setAlert('Unmatched Password')
    } else {     
      const { status, message } = await register(props);
      console.log('Received registration response: ', status, message)
      if (status.isLogin) {
        setLoginStatus(status);
      } else {
        setLoginStatus({isLogin: false, user: ''});
        props.setAlert(message)
        console.log(message)
      }
      console.log('Is login after clicking: ', loginStatus.isLogin)
    }
  };

  return (
    <div>
      <Button
        variant="primary"
        type="submit"
        onClick={handleClick}
      >
      Register
      </Button>
      {renderRedirect()}
    </div>
  );
};

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
      redirect: false,

      showAlert: false,
      alertMsg: 'Registration Failed'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log(this.state)
  });

  unmatchedPwd = () => {
    const { password, passwordConfirm } = this.state;
    return password !== passwordConfirm
  }

  setAlert = (msg) => {
    this.setState({
      showAlert: true,
      alertMsg: msg,
    })
  }

  onCloseAlert = () => {
    this.setState({ showAlert: false })
  }

  render() {
    return (
      <div className="registration">
        <Alert variant="danger" show={this.state.showAlert} onClose={this.onCloseAlert} dismissible>
          {this.state.alertMsg}
        </Alert>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="username">
            <Form.Label>User name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPasswordConfirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="passwordConfirm"
              value={this.state.passwordConfirm}
              onChange={this.handleChange}
              isInvalid={this.unmatchedPwd()}
            />
            <Form.Control.Feedback type="invalid">Unmatched Password</Form.Control.Feedback>
          </Form.Group>

          <RegistrationButton
            email={this.state.email}
            name={this.state.name}
            password={this.state.password}
            unmatchedPwd={this.unmatchedPwd()}
            setAlert={this.setAlert}
          />
        </Form>
      </div>
    );
  }
}

export default Registration