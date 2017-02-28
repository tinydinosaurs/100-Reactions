import React from 'react';

const Button = (props) => {
  return (
    <div className="calc-button" onClick={props.onClick} data-size={props.size} data-value={props.value}>{props.label}</div>
  )
}

export default Button;
