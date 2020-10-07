import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutUs} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
