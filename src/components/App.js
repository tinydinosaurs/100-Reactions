import React, { Component } from 'react';
import { Link } from 'react-router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>why is everyone yelling?</h1>
        <div className="project">
          <Link to='/login'>login form</Link>
        </div>
        <div className="project">
          <Link to='/checkout'>checkout form</Link>
        </div>
        <div className="project">
          <Link to='/netflix'>netflix landing page</Link>
        </div>
      </div>
    );
  }
}

export default App;
