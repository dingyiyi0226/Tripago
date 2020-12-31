import React, { Component } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'

class LoginAlert extends Component {
	render() {
		if (this.props.errorMessage) {
			return (
				<Alert variant={"warning"}>
					{this.props.errorMessage}
				</Alert>
			);
		} else {
			return <div/>
		}
	}
}

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			errorMessage: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (event => {
		let { name, value } = event.target;
		this.setState({
			[name]: value
		});
	});

	handleSubmit = (event => {
		event.preventDefault();
	})

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
				  <Button variant="primary" type="submit" onClick={this.handleSubmit}>
				    Login
				  </Button>
				</Form>
				<br/>
				<div style={{"width": "60%", "margin":"auto"}}>
					<LoginAlert errorMessage={this.state.errorMessage}/>
				</div>
			</div>);
	}
}

export default Login