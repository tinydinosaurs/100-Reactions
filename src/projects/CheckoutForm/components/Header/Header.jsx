import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="checkout__header">
        <input type="range" max="52" min="1" step="1" onChange={this.props.onChange} />
      </header>
    )
  }
}

export default Header
