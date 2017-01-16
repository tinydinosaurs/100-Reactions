import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
// components
import ImagePreview from './components/ImagePreviewArea/ImagePreview';
import Checkout from './components/CheckoutArea/Checkout';
import Header from './components/Header/Header';
import Overlay from './components/Overlay/Overlay';
import Container from './components/Container/Container';
// styles for the whole project
import './App.css';
// image
// import Image from './images/galactic_coworking.jpg';


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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({mounted: true});
  }

  handleChange(e) {
    this.setState({duration: e.target.value})
    console.log(e.target.value)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log("you clicked submit, you smarty")
  }

  render() {
    let overlay, container;
    if(this.state.mounted) {
      overlay = (
        <Overlay image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg" />
      );
      container = (
        <Container>
          <ImagePreview duration={this.state.duration} price={this.state.price} people={this.state.people} image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg" />
          <Checkout duration={this.state.duration} price={this.state.price} tax={this.state.tax} discount={this.state.discount} onSubmit={this.state.handleSubmit} />
        </Container>
      )
    }

    return (
      <div className="content__main--checkout-form">
        <ReactCSSTransitionGroup transitionName="overlay" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {overlay}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup transitionName="container" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {container}
        </ReactCSSTransitionGroup>
        <Header onChange={this.handleChange} />
      </div>
    );
  }
}

export default CheckoutForm;

// let overlay, container;
// if(this.state.mounted) {
//   overlay = (
//     <Overlay image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg" />
//   );
//   container = (
//     <Container>
//       <ImagePreview duration={this.state.duration} price={this.state.price} people={this.state.people} image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg" />
//       <Checkout duration={this.state.duration} price={this.state.price} tax={this.state.tax} discount={this.state.discount} onSubmit={this.state.handleSubmit} />
//     </Container>
//   );
// }
