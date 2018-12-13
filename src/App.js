import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import GuidesList from './components/GuidesList';
import Scan from './components/Scan'
import Speech from './components/Speech'
import Profile from './components/Profile'
import GuideDetails from './components/GuideDetails'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <GuideDetails/>
        <Footer/>
      </div>
    );
  }
}

export default App;
