import React, { Component } from 'react';
import ImagePreview from './components/ImagePreviewArea/ImagePreview';
import Checkout from './components/CheckoutArea/Checkout';
import Header from './components/Header/Header';
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

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      people: 1,
      price: 320.00,
      tax: 20,
      duration: 1,
      discount: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({mounted: true});
  }

  handleChange(e) {
    this.setState({duration: e.target.value})
    console.log(e.target.value)
  }

  render() {

    return (
      <div className="App">
        <p>checkout form</p>
        <ImagePreview />
        <Checkout />
        <ReactCSSTransitionGroup transitionName="overlay" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {Overlay}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup transitionName="container" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {Container}
        </ReactCSSTransitionGroup>
        <Header onChange={this.handleChange} />
        <p>this is the duration: {this.state.duration}</p>
      </div>
    );
  }
}

export default CheckoutForm;
