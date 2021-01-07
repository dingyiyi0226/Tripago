import React, { Component, useContext, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { register, login } from './authenticate'
import LoginContext from '../../LoginContext.js'


class UnmatchedPwdAlert extends Component {
	render() {
		// console.log(this.props.data)
		let { password, passwordConfirm, passwordChanged, passwordConfirmChanged } = this.props.data;
		return (passwordChanged && passwordConfirmChanged && (password !== passwordConfirm)) ?
			(<Alert variant="warning">
				unmatched passwords!
			</Alert>): 
			(<div/>)
	}
}

class RegistrationAlert extends Component {
	render() {
		if (this.props.errorMessage) {
			return (
				<Alert variant="warning">
					{this.props.errorMessage}
				</Alert>
			);
		} else {
			return <div/>
		}
	}
}


const RegistrationButton = (email, name, password) => {
	const {loginStatus, setLoginStatus} = useContext(LoginContext);
	const [errorMessage, setErrorMessage] = useState("");

	const renderRedirect = () => {
		if(loginStatus.isLogin) {
			console.log('redirect rendered')
			return <Redirect to='/home'/>;
		}
	};

	const handleClick = async (e) => {
		e.preventDefault();
		const { status, message } = await register(email, name, password);
		console.log('Received registration response: ', status, message)
		if (status.isLogin) {
			setLoginStatus(status);
		} else {
			setErrorMessage(message);
			console.log(message)
			setLoginStatus({isLogin: false, user: ''});
		}
		console.log('Is login after clicking: ', loginStatus.isLogin)
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
			<br/>
			<div style={{"width": "80%", "margin":"auto"}}>
				<RegistrationAlert errorMessage={errorMessage}/>
			</div>
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
			passwordChanged: false,
			passwordConfirmChanged: false,
			errorMessage: "",
			redirect: false
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event => {
		let { name, value } = event.target;
		this.setState({
			[name]: value,
			[name + "Changed"]: true
		});
		// console.log(this.state)
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

				  <Form.Group controlId="formBasicEmail">
				    <Form.Label>User name</Form.Label>
				    <Form.Control 
				    	type="text" 
				    	placeholder="Enter username" 
				    	name="name" 
				    	value={this.state.name} 
				    	onChange={this.handleChange}/>
				  </Form.Group>

				  <Form.Group controlId="formBasicPassword">
				    <Form.Label>Password</Form.Label>
				    <Form.Control 
				    type="password" 
				    placeholder="Password"
				    name="password"
				    value={this.state.password}
				    onChange={this.handleChange}/>
				  </Form.Group>

				  <Form.Group controlId="formBasicPasswordConfirm">
				    <Form.Label>Confirm Password</Form.Label>
				    <Form.Control 
				    type="password" 
				    placeholder="Password"
				    name="passwordConfirm"
				    value={this.state.passwordConfirm}
				    onChange={this.handleChange} />
				  </Form.Group>
				  <div style={{"width": "80%", "margin":"auto"}}>
					  <UnmatchedPwdAlert data={this.state}/>
				  </div>
				  <RegistrationButton 
				  	email={this.state.email} 
				  	name={this.state.name} 
				  	password={this.state.password} 
				  />
				</Form>
			</div>);
	}
}

export default Registration