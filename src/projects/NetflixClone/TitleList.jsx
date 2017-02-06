import React, { Component } from 'react';


class TitleList extends Component {

  componentDidMount() {
    console.log('yo');
    if (this.props.url) {
      this.loadContent();
      this.setState({ mounted: true })
    }
  }

  loadContent(e) {
    let requestUrl = `https://api.themoviedb.org/3/${this.props.url}&api_key=${this.props.apiKey}`
    console.log(requestUrl, this.state.TitleList);
  }

  render() {
    return (
      <div>a list of movie titles</div>
    )
  }
}

export default TitleList;
