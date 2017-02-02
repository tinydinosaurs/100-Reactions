import React, { Component } from 'react';

import './NetflixClone.css';

class NetflixClone extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      searchUrl: ''
    }
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleKeyUp(e) {
    console.log('*');
  }

  handleChange(e) {
    // console.log(e.target.value);
    this.setState({
      searchTerm: e.target.value
    });
    console.log(this.state.searchTerm);
  }

  render() {
    return (
      <div className="container__netflix">
        <h1>netflix landing page</h1>
        <form className="Search">
          <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search" placeholder="search a movie title!" value={this.state.searchTerm}/>
        </form>
      </div>
    );
  }
}

export default NetflixClone;
