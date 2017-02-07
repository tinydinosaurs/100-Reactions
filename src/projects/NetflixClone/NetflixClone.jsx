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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    // e.preventDefault();
    console.log(this.state.searchUrl);
    if (this.state.searchTerm !== '') {
      let searchUrl = `search/multi?query=${this.state.searchTerm}&api_key=${ApiKey}`;
      this.setState({ searchUrl: searchUrl });
      console.log(searchUrl);
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    });
  }

  render() {
    return (
      <div className="container__netflix">
        <h1>netflix landing page</h1>
        <form className="Search" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="search" placeholder="search a movie title!" value={this.state.searchTerm}/>
        </form>
        <TitleList title="Search Results!" searchTerm={this.state.searchTerm} url={this.state.searchUrl} apiKey={ApiKey} />
        <TitleList title="Top TV!" searchTerm="Top TV!" url="discover/tv?sort_by=popularity.desc&page=1" apiKey={ApiKey} />
        <TitleList title="Top Movies!" searchTerm="Top Movies!" url="discover/movie?sort_by=popularity.desc&page=1" apiKey={ApiKey} />
        <TitleList title="Horror!" searchTerm="Horror!" url="genre/27/movies?sort_by=popularity.desc&page=1" apiKey={ApiKey} />
        <TitleList title="Sci Fi!" searchTerm="Sci Fi!" url="genre/878/movies?sort_by=popularity.desc&page=1" apiKey={ApiKey} />
      </div>
    );
  }
}

export default NetflixClone;




// THIS MIGHT BE A BETTER WAY, BUT I'M NOT CERTAIN
// if (e.key === 'Enter') {
//   e.preventDefault();
//   console.log(true);
// }
  //  if (e.key === 'Enter' && this.state.searchTerm !== '')  {
  //    e.preventDefault();
  //    let searchUrl = `search/multi?query=${this.state.searchTerm}&api_key=${ApiKey}`;
  //    this.setState({ searchUrl: searchUrl });
  //  }
