import React from 'react';

import PlantCard from '../components/PlantCard'

class PlantContainer extends React.Component {

  filteredPlant = () => {
    let filteredPlant = this.props.plants.filter(plant =>
        plant.species.toLowerCase().includes(this.props.search.toLowerCase())
      ).map(plant => <PlantCard key={plant.id} plant={plant} />)
      return filteredPlant
  }

  plant = () => {
    let plant = this.props.plants.map(plant => (
      <PlantCard key={plant.id} plant={plant} />
    ))
    return plant
  }

  render(){
    return(
      <div>
      {this.props.search === "" ? this.plant() : this.filteredPlant()}
      </div>
    )
  }
}


export default PlantContainer;
