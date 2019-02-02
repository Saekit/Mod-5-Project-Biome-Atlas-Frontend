import React from 'react';
import {connect} from 'react-redux'
import {displayBiome} from '../actions/biomeActions'
import {Link} from 'react-router-dom'


class Carousel extends React.Component {

  handleClick = () => {
    this.props.displayBiome(this.props.biome)
  }

  render(){
    let biome = this.props.biome
    return(
      <div>
        <ul>
          <Link to="/biome"><img onClick={this.handleClick} src={biome.image} alt="" /></Link>
          <li>{biome.biome_name}</li>
        </ul>
      <hr />
      </div>
    )
  }
}


export default connect(null, {displayBiome})(Carousel);
