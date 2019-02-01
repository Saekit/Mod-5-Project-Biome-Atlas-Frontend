import React from 'react';
import AnimalCard from '../components/AnimalCard';


class AnimalContainer extends React.Component {


  render(){
    let animal = this.props.animals.map(animal => <AnimalCard key={animal.id} animal={animal} />)

    return(
      <div>
      {animal}
      </div>
    )
  }
}


export default AnimalContainer;
