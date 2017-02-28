import React from 'react';

const Buttons = (props) => {
  return (
    <div className="calc-buttons">
      <h2>These are the caculator buttons</h2>
      {props.children}
    </div>
  )
}

export default Buttons;
