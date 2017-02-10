import React from 'react';


// const HeroButton = props => {
//   <a href="#" className="Button" data-primary={props.primary}>{props.text}</a>
// }

const Hero = props => (
  <div id="hero" className="Hero" style={{backgroundImage: 'url(http://placekitten.com/g/1080/500)'}}>
    <div className="content">
      <img className="logo" src={require("./images/narcats.logo.png")} alt="narcos background" />
      <h2>Season 2 now available</h2>
      <p>Cat ipsum dolor sit amet, chase after silly colored fish toys around the house yet scratch leg; meow for can opener to feed me or chirp at birds stare at the wall, play with food and get confused by dust.</p>
      <div className="button-wrapper">
        {/* <HeroButton primary={true} text="Watch now" /> */}
        {/* <HeroButton primary={false} text="+ My list" /> */}
      </div>
    </div>
    <div className="overlay"></div>
  </div>
)

export default Hero;
