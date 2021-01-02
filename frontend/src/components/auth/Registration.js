import React, { Component, useContext } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { register } from './authenticate'


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

class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			passwordConfirm: "",
			passwordChanged: false,
			passwordConfirmChanged: false,
			errorMessage: "",
			redirect: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (event => {
		let { name, value } = event.target;
		this.setState({
			[name]: value,
			[name + "Changed"]: true
		});
		// console.log(this.state)
	});

	handleSubmit = (event => {
		event.preventDefault();
		// if successfully register
		// TODOs
		this.setState({redirect: true});
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
				  {this.renderRedirect()}
				  <Button variant="primary" type="submit" onClick={this.handleSubmit}>
				    Register
				  </Button>
				</Form>
				<br/>
				<div style={{"width": "60%", "margin":"auto"}}>
					<RegistrationAlert errorMessage={this.state.errorMessage}/>
				</div>
			</div>);
	}
}

export default Registration