import React from 'react';

const Overlay = (props) => {
  return (
    <div className="overlay__main--checkout-form" style={{'backgroundImage': 'url('+ props.image + ')'}}>This is the overlay</div>
  );
}

export default Overlay
