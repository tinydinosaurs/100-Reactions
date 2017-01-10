import React, { Component } from 'react';
import { Link } from 'react-router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>why is everyone yelling?</h1>
        <div className="project">
          <Link to='/login-form'>login form project</Link>
        </div>
        <div className="project">
          <Link to='/login-form'>project 2</Link>
        </div>
        <div className="project">
          <Link to='/login-form'>projecct 3</Link>
        </div>
        <div className="project">
          <Link to='/login-form'>project 4</Link>
        </div>
        <div className="project">
          <Link to='/login-form'>project 5</Link>
        </div>
      </div>
    );
  }
}

export default App;
