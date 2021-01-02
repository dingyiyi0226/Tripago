import React, { Component, useContext } from 'react';
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
	const renderRedirect = () => {
		if(isLogin) {
			return <Redirect to='/home'/>;
		}
	};
	return (
		<div>
			<Button 
				variant="primary" 
				type="submit" 
				onClick={(e) => {
					const tmp = login(email, password);
					if (tmp) {
						setIsLogin(true);
					}
				}}
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
			email: "",
			password: "",
			errorMessage: "",
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event => {
		let { name, value } = event.target;
		this.setState({
			[name]: value
		});
	});

	renderRedirect = (() => {
		if (this.state.redirect) {
			return <Redirect to='/home'/>;
		} 
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
				<br/>
				<div style={{"width": "60%", "margin":"auto"}}>
					<LoginAlert errorMessage={this.state.errorMessage}/>
				</div>
			</div>);
	}
}

export default Login