import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

import Tripago from './containers/Tripago.js';
import LoginContext from './LoginContext.js';
import { checkLoginStatus } from './components/auth/authenticate'

function App() {
	const [loginStatus, setloginStatus] = useState({
		isLogin: false,
		userID: undefined
	});
	const value = { loginStatus, setloginStatus };

	useEffect(() => {
		const new_loginStatus = checkLoginStatus();
		setloginStatus(new_loginStatus);
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
