import React, { Component } from 'react';
import ImagePreview from './components/ImagePreviewArea/ImagePreview';
import Checkout from './components/CheckoutArea/Checkout';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

// styles for the whole project
import '../../components/App.css';

const Overlay = (props) => {
  return (
    <div className="Overlay" style={{'backgroundImage': 'url('+ props.image + ')'}}>This is the overlay</div>
  );
}

const Container = (props) => {
  <div className="Container">{props.children}</div>
}

const Header = (props) => {
  <header>
    <input type="range" max="100" min="1" step="1" onChange={props.onChange}/>
  </header>
}

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      people: 1,
      price: 320.00,
      tax: 20,
      duration: 5,
      discount: 5
    }
  }

  componentDidMount() {
    this.setState({mounted: true});
  }

  render() {
    return (
      <div className="App">
        <p>checkout form</p>
        <ImagePreview />
        <Checkout />
      </div>
    );
  }
}

export default CheckoutForm;
