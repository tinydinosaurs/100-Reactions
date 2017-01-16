import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header__checkout-form">
        <p>this is the header</p>
        <input type="range" max="100" min="1" step="1" onChange={this.props.onChange} />
      </header>
    )
  }
}

export default Header
