import React from 'react';

const LoginContext = React.createContext({
	isLogin: false,
	setIsLogin: () => {}
});

export default LoginContext;