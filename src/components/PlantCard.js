import React from 'react';


class PlantCard extends React.Component {


  render(){
    let plant = this.props.plant
    return(
      <div>
      <ul>
        <li>Species: {plant.species}</li>
        <li>Size: {plant.size}</li>
        <li>Seed Distribution: {plant.seed_distribution}</li>
        <li>Location: {plant.location}</li>
        <li>Predators: {plant.predators}</li>
        <li>Interesting Fact: {plant.other_info}</li>
      </ul>
      <hr />
      </div>
    )
  }
}


export default PlantCard;
