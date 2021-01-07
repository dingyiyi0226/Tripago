import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

import Tripago from './containers/Tripago.js';
import LoginContext from './LoginContext.js';
import { checkLoginStatus } from './components/auth/authenticate'

function App() {
	const [loginStatus, setLoginStatus] = useState({
		isLogin: false,
		userID: undefined
	});
	const value = { loginStatus, setLoginStatus };

	useEffect(async () => {
		const new_loginStatus = await checkLoginStatus();
		console.log('newstatus@App',new_loginStatus.data)
		setLoginStatus(new_loginStatus.data);
	}, []);

  return (
    <div className="App">
    <LoginContext.Provider value={value}>
      <Tripago />
    </LoginContext.Provider>
    </div>
  );
}

export default App;
