import React, { Component, useContext, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { login } from './authenticate'
import LoginContext from '../../LoginContext.js'


class LoginAlert extends Component {
	render() {
		if (this.props.errorMessage) {
			return (
				<Alert variant={"warning"}>
					{this.props.errorMessage}
				</Alert>
			);
		}
		return <div/>
	}
}

const LoginButton = (email, password) => {
	const {isLogin, setIsLogin} = useContext(LoginContext);
	const [errorMessage, setErrorMessage] = useState("");

	const renderRedirect = () => {
		if(isLogin) {
			console.log('redirect rendered')
			return <Redirect to='/home'/>;
		}
	};

	const handleClick = async (e) => {
		e.preventDefault();
		const { status, message } = await login(email, password);
		console.log('Received login status: ', status, message)
		if (status) {
			setIsLogin(true);
		} else {
			setErrorMessage(message);
			console.log(message)
			setIsLogin(false);
		}
		console.log('Is login after clicking: ', isLogin)
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
			<br/>
			<div style={{"width": "80%", "margin":"auto"}}>
				<LoginAlert errorMessage={errorMessage}/>
			</div>
		</div>
	);
};

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event => {
		let { name, value } = event.target;
		this.setState({
			[name]: value
		});
	});

	render() {
		return (
			<div style={{"width":"40%", "margin":"auto"}}>
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
				  <LoginButton email={this.state.email} password={this.state.password}/>
				</Form>
			</div>);
	}
}

export default Login