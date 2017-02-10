import React, { Component } from 'react';
import Item from './Item';

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
      // console.log(data);
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
    // console.log('yo', this.props.url === '');
    if (this.props.url !== '') {
      this.loadContent();
      this.setState({ mounted: true })
    }
  }

  render() {
    if(!this.state.data) {
      return;
    }
    let titles;
      if(this.state.data.results) {
        titles = this.state.data.results.map(function(title, i) {
          if(i < 5) {
            let name;
            let backDrop;
            if(title.backdrop_path) {
              backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
            } else {
              backDrop = "http://placekitten.com/g/1920/1080"
            }

            if(title.name) {
              name = title.name;
            } else {
              name = title.title;
            }

            return (
              <Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} />
            );

          }else{
            return (<div key={title.id}></div>);
          }
        });

      }

      return (
        <div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
          <div className="Titles">
            <h1>{this.props.title}</h1>
            <div className="titles-wrapper">
              {titles}
            </div>
          </div>
        </div>
      );
    }
  };



export default TitleList;
