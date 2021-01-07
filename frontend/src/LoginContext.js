import React from 'react';

const LoginContext = React.createContext({
	loginStatus: {
		isLogin: false,
		name: ''
	},
	setLoginStatus: () => {}
});

export default LoginContext;