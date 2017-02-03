import React, { Component } from 'react';
import TitleList from './TitleList';
import Config from './config';
import './NetflixClone.css';

const ApiKey = Config.TMDb;

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
    e.preventDefault();
       if (e.key === 'Enter' && this.state.searchTerm !== '')  {
         let searchUrl = `search/multi?query=${this.state.searchTerm}&api_key=${ApiKey}`;
         this.setState({ searchUrl: searchUrl });
       }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    });
  }

  render() {
    // console.log(this.state.searchUrl);
    return (
      <div className="container__netflix">
        <h1>netflix landing page</h1>
        <form className="Search">
          <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search" placeholder="search a movie title!" value={this.state.searchTerm}/>
        </form>
        <TitleList />
      </div>
    );
  }
}

export default NetflixClone;
