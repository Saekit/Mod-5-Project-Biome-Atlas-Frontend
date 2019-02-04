import React from 'react';
import {connect} from 'react-redux'
import {displayBiome} from '../actions/biomeActions'
import {Link} from 'react-router-dom'
import {Header} from 'semantic-ui-react'


class HomeCard extends React.Component {

  handleClick = () => {
    this.props.displayBiome(this.props.biome)
  }

  render(){

    let biome = this.props.biome
    const styles = {
      backgroundImage: `url(${biome.image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }
    return(
      <Link to="/biome">
        <div
          onClick={this.handleClick}
          className="slide"
          style={styles}>
          <Header as='h2' textAlign='center'>{biome.biome_name}</Header>
        </div>
      </Link>
    )
  }
}


export default connect(null, {displayBiome})(HomeCard);
