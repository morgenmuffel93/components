import React, { Component } from 'react';
import InfoCard from './InfoCard'

class Main extends Component {
  render() {
    return (
      <section className="main">
        <InfoCard img="">Guides</InfoCard>
        <InfoCard img="">Taxi</InfoCard>
        <InfoCard img="">Public transport</InfoCard>
        <InfoCard img="">Restaurants</InfoCard>
        <InfoCard img="">Museums</InfoCard>
        <InfoCard img="">Accomodation</InfoCard>
        <InfoCard img="">Night life</InfoCard>
        <InfoCard img="">Another</InfoCard>
      </section>
    );
  }
}

export default Main;