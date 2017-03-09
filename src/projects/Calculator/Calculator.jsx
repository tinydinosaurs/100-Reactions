import React, { Component } from 'react';
import Immutable from 'immutable';
import Buttons from './Buttons';
import Button from './Button';
import Display from './Display';
// import './Calculator.css';
import '../../App.css';

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      operations: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const value = e.target.getAttribute('data-value');
    let newOperations = Immutable.List(this.state.operations).push(value).toJS();
    console.log(newOperations);
  }


  render() {
    return (
      <div className="calc-container">
        <h1>This will be a fancy calculator!</h1>
        <Display />
        <Buttons>
          <Button onClick={this.handleClick} label="C" value="clear" />
          <Button onClick={this.handleClick} label="7" value="7" />
          <Button onClick={this.handleClick} label="4" value="4" />
          <Button onClick={this.handleClick} label="1" value="1" />
          <Button onClick={this.handleClick} label="0" value="0" />

          <Button onClick={this.handleClick} label="/" value="/" />
          <Button onClick={this.handleClick} label="8" value="8" />
          <Button onClick={this.handleClick} label="5" value="5" />
          <Button onClick={this.handleClick} label="2" value="2" />
          <Button onClick={this.handleClick} label="." value="." />

          <Button onClick={this.handleClick} label="x" value="x" />
          <Button onClick={this.handleClick} label="9" value="9" />
          <Button onClick={this.handleClick} label="6" value="6" />
          <Button onClick={this.handleClick} label="3" value="3" />
          <Button label="<="/>

          <Button onClick={this.handleClick} label="-" value="-" />
          <Button onClick={this.handleClick} label="+" value="+" />
          <Button onClick={this.handleClick} label="=" value="equal" />
        </Buttons>
      </div>
    )
  }
}

export default Calculator;
