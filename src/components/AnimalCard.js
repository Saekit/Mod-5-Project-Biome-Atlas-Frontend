import React from 'react';


class AnimalCard extends React.Component {
//   biome_id: 7
// endangered: true
// id: 31
// image: null


  render(){
    let animal = this.props.animal
    return(
      <div>
      <ul>
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


export default AnimalCard;
