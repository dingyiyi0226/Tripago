import axios from 'axios'

const test_login_response = {
	success: {
		status: {
			isLogin: true,
			userID: '123'
		},
		message: 'login success'
	},
	fail: {
		status: {
			isLogin: false,
			userID: ''
		},
		message: 'Wrong username or password'
	}
}

const register_error_response = {
	status: {
		isLogin: false,
		userID: ''
	},
	message: 'Register failed'
}

const delay = (s) => {
  return new Promise(resolve => {
    setTimeout(resolve,s); 
  });
};

const login = async (user) => {
	const { email, password } = user;
	await delay(500);
	return test_login_response.success
};

const register = (user) => {
	const { email, password } = user;
	// do something for register
	let registerSuccess = false;
	if (registerSuccess) {
		return login(user)
	} else {
		return register_error_response
	}

};

const logout = () => {
	return true;
};

const checkLoginStatus = () => {
	// console.log(this)
	return test_login_response.fail;
};

export { login, register, logout, checkLoginStatus }
