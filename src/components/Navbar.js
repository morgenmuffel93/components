// Navbar/search bar component

import React, { Component } from 'react';
import places from '../locations'
class Navbar extends Component {

  state = {
    search: '',
    locations: [],
    
  }
  
  findLocation = (value) => {
    this.setState({
      locations: []
    })
 
      if(value.length > 2){
        let locationsList = [];
        places.forEach((place) => {
          if(place.name.toLowerCase().includes(value.toLowerCase())){
            locationsList.push(place.name)
          }
        })
        if(value.length < 2) {
          locationsList = [];
        }
          this.setState({
            locations : locationsList,
          })
        }
        
    }
  
  
  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
    })
    this.findLocation(event.target.value)
  }

  render() {
    let {locations} = this.state
    return (
      <nav>
        <input type="text" className="input" placeholder="Search..." onChange={this.handleSearch} name="search" value={this.state.search}/>
        <div>
          {locations.map((place, index) => {
              return <div key={index}>
                      {locations}

              </div>
          })}
        </div>
      </nav>
    );
  }
}

export default Navbar;