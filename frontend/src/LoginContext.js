import React from 'react';

const LoginContext = React.createContext({
	loginStatus: {
		isLogin: false,
		userID: ''
	},
	setLoginStatus: () => {}
});

export default LoginContext;