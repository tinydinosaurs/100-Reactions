import React, { Component } from 'react';
import TitleList from './TitleList';
import Logo from './Logo';
import Navigation from './Navigation';
import Hero from './Hero';
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
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
      let searchUrl = `search/multi?query=${this.state.searchTerm}&api_key=${ApiKey}`;
      this.setState({
        searchUrl: searchUrl,
        searchTerm: ''
      });

    }
  }

  handleChange(e){
      this.setState({ searchTerm : e.target.value });
  }

  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />
          <div id="search" className="Search">
            <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search" placeholder="Search for a title..." value={this.state.searchTerm}/>
          </div>
        </header>
        <Hero />
        <TitleList title="Search Results" url={this.state.searchUrl} apiKey={ApiKey} />
        <TitleList title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1' apiKey={ApiKey} />
        <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' apiKey={ApiKey} />
        <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' apiKey={ApiKey} />
        <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' apiKey={ApiKey} />
        <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' apiKey={ApiKey} />
      </div>
    );
  }
}

// end class
export default NetflixClone;
