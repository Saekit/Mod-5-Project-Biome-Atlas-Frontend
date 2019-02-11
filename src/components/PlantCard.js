import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {changePlant} from '../actions/plantActions'
import { Item } from 'semantic-ui-react'

class PlantCard extends React.Component {

    handleClick = () => {
      this.props.changePlant(this.props.plant)
    }

  render(){
    let plant = this.props.plant
    let noSciName = plant.species.replace(/ *\([^)]*\) */g, "")
    return(
      <Item.Group className="border">
        <Item>
          <img className="list-image" src={plant.image} />
          <Item.Content verticalAlign='middle'>
            <Item.Header as='a'>
              <Link to="/plantinfo">
                <p className="list-color" onClick={this.handleClick}>{noSciName}</p>
              </Link>
            </Item.Header>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
}


export default connect(null, {changePlant})(PlantCard);
