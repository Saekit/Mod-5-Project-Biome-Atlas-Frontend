import React from 'react';


class AnimalInfoCard extends React.Component {

  render(){
    let {animal} = this.props
    return(
      <div>
      <ul>
        <img src={animal.image} alt="" />
        <li>Species: {animal.species}</li>
        <li>Size: {animal.size}</li>
        <li>Lifespan: {animal.lifespan}</li>
        <li>Location: {animal.location}</li>
        <li>Prey: {animal.prey}</li>
        <li>Predators: {animal.predators}</li>
        <li>Interesting Fact: {animal.other_info}</li>
      </ul>
      <hr />
      </div>
    )
  }
}


export default AnimalInfoCard;
