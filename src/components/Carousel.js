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
          <li>{biome.biome_name}</li>
          <Link to="/biome"><button onClick={this.handleClick}>See More</button></Link>
        </ul>
      <hr />
      </div>
    )
  }
}


export default connect(null, {displayBiome})(Carousel);
