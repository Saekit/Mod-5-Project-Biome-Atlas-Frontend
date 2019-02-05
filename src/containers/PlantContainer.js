import React from 'react';

import PlantCard from '../components/PlantCard'

class PlantContainer extends React.Component {

  render(){
    let plant = this.props.plants.filter(plant => plant.species.toLowerCase().includes(this.props.search.toLowerCase())).map(plant => <PlantCard key={plant.id} plant={plant} />)
    return(
      <div>
        {plant}
      </div>
    )
  }
}


export default PlantContainer;
