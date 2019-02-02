import React from 'react';
import AnimalContainer from '../containers/AnimalContainer'
import PlantContainer from '../containers/PlantContainer'

class BiomeCard extends React.Component {
  state = {
    animal: false
  }

  animalHandler = () => {
    let click = this.state.animal
    this.setState({
      animal: !click
    })
  }

  plantHandler = () => {
    let click = this.state.plant
    this.setState({
      plant: !click
    })
  }

  render(){
    let biome = this.props.biome
    return(
      <div>
        <ul>
          <img src={biome.image} alt="" />
          <li>Biome: {biome.biome_name}</li>
          <li>Ecosystems: {biome.ecosystems}</li>
          <li>Temperature Range: {biome.temp_range}</li>
          <li>Biodiversity: {biome.biodiversity}</li>
          <button onClick={this.animalHandler}>Animals</button>
          <button onClick={this.plantHandler}>Plants</button>
          {this.state.animal ? <AnimalContainer animals={this.props.animals} /> : null}
          {this.state.plant ? <PlantContainer plants={this.props.plants} /> : null}
        </ul>
      <hr />
      </div>
    )
  }
}


export default BiomeCard;
