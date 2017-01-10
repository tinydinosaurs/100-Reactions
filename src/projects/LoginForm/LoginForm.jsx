import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import { Link } from 'react-router';

import './LoginForm.css';

// class LoginForm extends Component {
//   render() {
//     return (
//       <div className="login-form">
//         <p>login form</p>
//
//       </div>
//     );
//   }
// }

const Input = React.createClass({
  render: function() {
    return (
      <div className="input">
        <input
          id={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
        />
        <label htmlFor={this.props.name}></label>
      </div>
    );
  }
})

const Modal = React.createClass({
  render: function() {
    return (
      <div className="modal">
        <form onSubmit={this.props.onSubmit}>
          <Input id="name" type="text" placeholder="full name" />
          <Input id="username" type="email" placeholder="name@email.com" />
          <Input id="password" type="password" placeholder="password" />
          <button>log in <i className="fa fa-fw fa-chevron-right"></i></button>
        </form>
      </div>
    )
  }
})

const LoginForm = React.createClass({
  getInitialState: function() {
    return { mounted: false };
  },

  componentDidMount: function() {
    this.setState({ mounted: true });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({mounted: false});
  },

  render: function() {
    let child;
    if(this.state.mounted) {
      child = (<Modal onSubmit={this.handleSubmit} />);
    }
    return (
      <div className="body">
      <div className="app">
      <p className="breadcrumbs"><Link to='/'>home</Link> > login form</p>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {child}
        </ReactCSSTransitionGroup>
      </div>
      </div>
    )
  }
});

export default LoginForm;
