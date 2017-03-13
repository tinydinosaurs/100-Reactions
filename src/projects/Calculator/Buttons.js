import React from 'react';

const Buttons = (props) => {
  return (
    <div className="calc-buttons">
      {props.children}
    </div>
  )
}

export default Buttons;
