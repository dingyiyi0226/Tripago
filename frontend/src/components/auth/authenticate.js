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
		message: 'Wrong email or password'
	}
};

const register_error_response = {
	status: {
		isLogin: false,
		userID: ''
	},
	message: 'Registration failed'
};

const login = async (user) => {
	const { email, password } = user;
	let data = undefined;
	const res = await instance
		.post('/login', user)
		.then((res) => {
			console.log('Login 200: ', res.data);
			data = res.data;
		})
		.catch((err) => {
			console.log('Login err: ', err);
			data = test_login_response.fail;
		});
	return data;
};

const register = async (user) => {
	const { email, name, password } = user;
	// do something for register
	const res = await instance.post('/register', user);
	console.log(res)
	let registerSuccess = false
	if (registerSuccess) {
		return login(user);
	} else {
		return register_error_response;
	}

};

const logout = async () => {
	const res = instance.post('/logout');
};

const checkLoginStatus = async () => {
	console.log('checkLoginStatus called');
	const res = await instance.get('/session') // {isLogin: Bool, name: String}
	return res;
};

export { login, register, logout, checkLoginStatus }
