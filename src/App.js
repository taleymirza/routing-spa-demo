import React from 'react';
import './App.css';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <h1>Simple SPA</h1>
      <ul className="header">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
