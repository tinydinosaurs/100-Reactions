import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import LoginForm from './components/LoginForm';
import App from './components/App';

import './index.css';


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/login-form" component={LoginForm}/>
  </Router>
), document.getElementById('root')
);
