import axios from 'axios'

const URL_ROOT = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'
const instance = axios.create({
  baseURL: URL_ROOT,
  withCredentials: true
})

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
	// await delay(500);
	const res = await instance.post('./login', user)
	console.log('server response:',res)
	return res
};

const register = async (user) => {
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
	console.log('checkLoginStatus called')
	return test_login_response.success.status;
};

export { login, register, logout, checkLoginStatus }
