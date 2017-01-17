import React from 'react';

const Overlay = (props) => {
  return (
    <div className="checkout__overlay-main" style={{'backgroundImage': 'url('+ props.image + ')'}}>This is the overlay</div>
  );
}

export default Overlay
