/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

// src/App.js

import React from 'react';
import HomePage from './pages/homePage';
import MyImage from './assets/fotoPerfil.jpeg';
import Header from './components/header';
function App() {
  return (
    <div className="App">
      <img src={MyImage} alt="Photo profile" />
      <HomePage />
    </div>
  );
}

export default App;

