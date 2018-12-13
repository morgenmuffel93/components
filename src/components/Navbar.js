// Navbar/search bar component

import React, { Component } from 'react';

class Navbar extends Component {

  state = {
    search: '',
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
    })
  }

  render() {
    return (
      <nav>
        <input type="text" className="input" placeholder="Search..." onChange={this.handleSearch} name="search" value={this.state.search}/>
      </nav>
    );
  }
}

export default Navbar;