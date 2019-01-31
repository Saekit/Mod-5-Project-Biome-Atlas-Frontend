import React from 'react';
import AnimalCard from '../components/AnimalCard';
import {getAnimals} from '../thunk/animalThunk'

class BiomeContainer extends React.Component {
  render(){
    return(
      <div>
        <AnimalCard />
      </div>
    )
  }
}


export default BiomeContainer;
