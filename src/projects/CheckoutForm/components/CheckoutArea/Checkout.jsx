import React, { Component } from 'react';
import OrderSummary from './OrderSummary';

class Checkout extends Component {
  render() {
    return(
      <div>
        <h1>this is the checkout component</h1>
        <OrderSummary componentName="order summary" />
      </div>
    );
  }
}

export default Checkout
