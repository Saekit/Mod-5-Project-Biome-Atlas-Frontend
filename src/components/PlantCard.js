import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {changePlant} from '../actions/plantActions'

class PlantCard extends React.Component {

    handleClick = () => {
      this.props.changePlant(this.props.plant)
    }

  render(){
    let plant = this.props.plant
    return(
      <div>
      <ul>
          <Link to="/plantinfo"><li onClick={this.handleClick}>Species: {plant.species}</li></Link>
      </ul>
      <hr />
      </div>
    )
  }
}


export default connect(null, {changePlant})(PlantCard);
