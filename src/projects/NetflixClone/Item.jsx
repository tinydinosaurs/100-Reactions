import React from 'react';
// import ListToggle from './ListToggle';

const Item = props => (

  <div className="Item">
    <div className="overlay">
      <div className="title">{props.title}</div>
      <div className="rating">{props.score}</div>
      <div className="plot">{props.overview}</div>
      {/* <ListToggle /> */}
    </div>
  </div>
  )

export default Item;
