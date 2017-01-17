import React, { Component } from 'react';
import OrderSummary from './OrderSummary';
import { PaymentForm } from './PaymentFormComponents';

class Checkout extends Component {
  render() {
    return(
      <div className="Checkout">
        <OrderSummary componentName="order summary" duration={this.props.duration} price={this.props.price} discount={this.props.discount} tax={this.props.tax} />
        <PaymentForm onSubmit={this.props.handleSubmit} />
      </div>
    );
  }
}

export default Checkout
