import React, { Component } from 'react';
import { Information, Meta } from './WorkspaceComponents';

class ImagePreview extends Component {
  render() {
    return(
      <div className="image-preview">
        {/*<h1>this is the image preview</h1>*/}
        <div className="WorkspaceOverview">
          <Information name="Galactic Coworking, Austin, Texas" price={this.props.price} duration="1" />
          <Meta people={this.props.people} />
        </div>
      </div>
    );
  }
}

export default ImagePreview
