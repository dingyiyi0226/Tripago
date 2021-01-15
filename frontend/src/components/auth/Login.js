import React, { Component, useContext, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { login } from './authenticate'
import LoginContext from '../../LoginContext.js'

import './auth.css'

const LoginButton = (props) => {
  const {loginStatus, setLoginStatus} = useContext(LoginContext);
  // const [errorMessage, setErrorMessage] = useState("");
  const renderRedirect = () => {
    if(loginStatus.isLogin) {
      console.log('redirect rendered')
      return <Redirect to='/home'/>;
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { status, message } = await login(props);
    console.log('Received login status: ', status, message)
    if (status.isLogin) {
      setLoginStatus(status);
    } else {
      setLoginStatus(status);
      props.setAlert(message);
      console.log(message)

    }
    console.log('Is login after clicking: ', loginStatus)
  };

  return (
    <div>
      <Button
        variant="primary"
        type="submit"
        onClick={handleClick}
      >
      Login
      </Button>
      {renderRedirect()}
    </div>
  );
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showAlert: false,
      alertMsg: 'Login failed.'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  });

  setAlert = (msg) => {
    this.setState({
      showAlert: true,
      alertMsg: msg,
      email: '',
      password: '',
    })
  }

  onCloseAlert = () => {
    this.setState({ showAlert: false })
  }

  render() {
    return (
      <div className="login">
        <Alert variant="danger" show={this.state.showAlert} onClose={this.onCloseAlert} dismissible>
          {this.state.alertMsg}
        </Alert>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label><br/>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange} />
          </Form.Group>
          <LoginButton email={this.state.email} password={this.state.password} setAlert={this.setAlert}/>
        </Form>
      </div>
    );
  }
}

export default Login