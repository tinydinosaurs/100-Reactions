import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import LoginForm from './projects/LoginForm/LoginForm';
import CheckoutForm from './projects/CheckoutForm/CheckoutForm';
import NetflixClone from './projects/NetflixClone/NetflixClone';
import App from './components/App';

import './index.css';


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/login" component={LoginForm}/>
    <Route path="/checkout" component={CheckoutForm}/>
    <Route path="/netflix" component={NetflixClone}/>
  </Router>
), document.getElementById('root')
);
