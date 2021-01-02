import axios from 'axios'

const test_login_response = {
	success: {
		status: true,
		message: 'login success'
	},
	fail: {
		status: false,
		message: 'wrong user or password'
	}
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

const register = () => {
	return true;
};

const logout = () => {

};

export { login, register, logout }
