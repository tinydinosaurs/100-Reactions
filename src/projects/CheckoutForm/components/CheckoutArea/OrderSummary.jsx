import React, { Component } from 'react';

class OrderSummary extends Component {
  render() {
    let duration;

    if( this.props.duration === 1) {
      duration = `${this.props.duration} week`;
    } else {
      duration = `${this.props.duration} weeks`;
    }

    let subtotal = this.props.duration * this.props.price;

    let tax = Math.floor((subtotal / 100) * this.props.tax);

    let total = subtotal + tax;

    return(
      <div className="OrderSummary">
        <div className="Title">Order Summary</div>
        <table>
          <tbody>
            <tr>
              <td>{this.props.price} x {duration}</td>
              <td>{subtotal}</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>${tax}</td>
            </tr>
          </tbody>
        </table>
        <div className="Total">
          <div className="TotalLabel">Total</div>
          <div className="Amount">
            ${total}
          </div>
        </div>
      </div>
    );
  }
}

export default OrderSummary
