// Footer component

import React, { Component } from 'react';
// import Square from './images/square'
// import Scan from './images/scan'
// import Microphone from './images/microphone'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div><img src="./images/square.svg" alt="main"/></div>
        <div><img src="./images/scan.svg" alt="scan"/></div>
        <div><img src="./images/microphone.svg" alt="microphone"/></div>
        <div><img src="./images/profile.svg" alt="profile"/></div>
      </footer>
    );
  }
}

export default Footer;