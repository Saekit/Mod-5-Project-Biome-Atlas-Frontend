import React from 'react';


class BiomeCard extends React.Component {

  render(){
    let biome = this.props.biome
    return(
      <div>
        <ul>
          <li>Biome: {biome.biome_name}</li>
          <li>Ecosystems: {biome.ecosystems}</li>
          <li>Temperature Range: {biome.temp_range}</li>
          <li>Biodiversity: {biome.biodiversity}</li>
        </ul>
      <hr />
      </div>
    )
  }
}


export default BiomeCard;
