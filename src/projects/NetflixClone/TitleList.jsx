import React, { Component } from 'react';

class TitleList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log('yo');
    if (this.props.url) {
      this.loadContent();
      this.setState({ mounted: true })
    }
  }

  loadContent(e) {
    console.log(this.props.url, 'load content');
  }

  render() {
    return (
      <div>a list of movie titles</div>
    )
  }
}

export default TitleList;
