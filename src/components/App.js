import React, { Component } from 'react';
import { Link } from 'react-router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="content__main--home">
        <h1 className="home__h1">why is everyone yelling?</h1>
        <div className="projects">
          <div className="project project__color-1">
            <Link to='/login'>login form</Link>
          </div>
          <div className="project project__color-2">
            <Link to='/checkout'>checkout form</Link>
          </div>
          <div className="project project__color-3">
            <Link to='/netflix'>netflix landing page</Link>
          </div>
          <div className="project project__color-4">
            {/*<Link to='/netflix'>netflix landing page</Link>*/}
          </div>
          <div className="project project__color-5">
            {/*<Link to='/netflix'>netflix landing page</Link>*/}
          </div>
          <div className="project project__color-6">
            {/*<Link to='/netflix'>netflix landing page</Link>*/}
          </div>
          <div className="project project__color-7">
            {/*<Link to='/netflix'>netflix landing page</Link>*/}
          </div>
          <div className="project project__color-8">
            {/*<Link to='/netflix'>netflix landing page</Link>*/}
          </div>
          <div className="project project__color-9">
            {/*<Link to='/netflix'>netflix landing page</Link>*/}
          </div>
          <div className="project project__color-1">
            {/*<Link to='/netflix'>netflix landing page</Link>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
