import React, { Component } from 'react';
import { Information, Meta } from './WorkspaceComponents';

class ImagePreview extends Component {
  render() {
    return(
      <div>
        <h1>this is the image preview</h1>
        <Information name="Silly Coworking, Austin, Texas" price={this.props.price} duration="1" />
        <Meta people={this.props.people} />
      </div>
    );
  }
}

export default ImagePreview
