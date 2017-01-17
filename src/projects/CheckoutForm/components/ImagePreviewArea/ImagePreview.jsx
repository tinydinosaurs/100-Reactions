import React, { Component } from 'react';
import { Information, Meta } from './WorkspaceComponents';

class ImagePreview extends Component {
  render() {
    return(
      <div className="checkout__form--image" style={{'backgroundImage': 'url('+ this.props.image +')'}}>
        <div className="checkout__form-text">
          <Information name="Galactic Coworking, Austin, Texas" price={this.props.price} duration="1" />
          <Meta people={this.props.people} />
        </div>
      </div>
    );
  }
}

export default ImagePreview
