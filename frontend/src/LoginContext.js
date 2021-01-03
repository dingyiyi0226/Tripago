import React from 'react';

const ADMIN_USERID = 'abcde' 

const LoginContext = React.createContext({
	data: {
		isLogin: false,
		userID: ADMIN_USERID
	},
	setIsLogin: () => {}
});

export default LoginContext;