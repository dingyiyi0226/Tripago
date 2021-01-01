import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import Tripago from './containers/Tripago.js';
import LoginContext from './LoginContext.js';

function App() {
	const [isLogin, setIsLogin] = useState(true);
	const value = { isLogin, setIsLogin };

  return (
    <div className="App">
    <LoginContext.Provider value={value}>
      <Tripago />
    </LoginContext.Provider>
    </div>
  );
}

export default App;
