import React, { Component } from 'react';


class TitleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      mounted: false
    }
    this.loadContent = this.loadContent.bind(this);
  }

  loadContent(e) {
    let requestUrl = `https://api.themoviedb.org/3/${this.props.url}&api_key=${this.props.apiKey}`;
    fetch(requestUrl).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      this.setState({ data: data });
    }).catch((error) => {
      console.log('something has gone horribly wrong', error);
    })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.url !== this.props.url && nextProps.url !== '') {
      this.setState({
        mounted: true,
        url: nextProps.url
      }, () => {
        this.loadContent();
      })
    };
  }

  componentDidMount() {
    console.log('yo', this.props.url === '');
    if (this.props.url !== '') {
      this.loadContent();
      this.setState({ mounted: true })
    }
  }


  render() {
    return (
      <div>
        <p>a list of movie titles about {this.props.searchTerm}</p>
      </div>
    )
  }
}

export default TitleList;
