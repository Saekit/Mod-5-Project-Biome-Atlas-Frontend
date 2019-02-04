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
    return(
      <Item.Group>
        <Item>
          <Item.Image size='tiny' src={plant.image} />
          <Item.Content verticalAlign='middle'>
            <Item.Header as='a'>
              <Link to="/plantinfo">
                <p onClick={this.handleClick}>Species: {plant.species}</p>
              </Link>
            </Item.Header>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
}


export default connect(null, {changePlant})(PlantCard);
