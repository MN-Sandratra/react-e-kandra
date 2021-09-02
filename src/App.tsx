import React from 'react';
import './App.scss';
import Navbar from './components/navbar';
import Profile from './components/profile';
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/js/dist/collapse'
import Feed from './components/feed';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
      <div className="container">
        <div className="body__main">
          <Profile></Profile>
          <Feed />
        </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
