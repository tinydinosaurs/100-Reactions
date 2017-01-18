import React from 'react';

const Information = (props) => {
  let duration;
  if(props.duration === "1") {
    duration =  "week";
  } else {
    duration = "weeks";
  }
  return (
    <div className="checkout__form-info">
      <div className="checkout__form--location">{props.name}</div>
      <div className="checkout__form--price-data">
        <div className="checkout__form--price">${props.price}</div>
        <div className="checkout__form--duration">/ {duration}</div>
      </div>
    </div>
  );
}

const Meta = (props) => {
  let people;
  if(props.people === 1) {
    people = `${props.people} person`;
  } else {
    people = `${props.people} people`;
  }
  return (
    <div className="checkout__form--metadata">
      <div className="Description">Office space for {people}</div>
      <div className="Dates"><strong>Mon. 18 Jan 2017</strong> to <strong>Fri. 20 Jan 2017</strong></div>
    </div>
  );
}

export { Information, Meta }
