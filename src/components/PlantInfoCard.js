import React from 'react';


class PlantInfoCard extends React.Component {

  render(){
    let {plant} = this.props
    return(
      <div>
      <ul>
        <img src={plant.image} alt="" />
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


export default PlantInfoCard;
