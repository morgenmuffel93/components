// Footer component

import React, { Component } from 'react';
// import Square from './images/square'
// import Scan from './images/scan'
// import Microphone from './images/microphone'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div><img src={require('../images/squares.svg')} alt="main"/></div>
        <div><img src={require('../images/scan.svg')} alt="scan"/></div>
        <div><img src={require('../images/microphone.svg')} alt="microphone"/></div>
      </footer>
    );
  }
}

export default Footer;