import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {changeAnimal} from '../actions/animalActions'
import { Item } from 'semantic-ui-react'


class AnimalCard extends React.Component {

  handleClick = () => {
    this.props.changeAnimal(this.props.animal)
  }

  render(){
    let animal = this.props.animal
    return(
      <Item.Group>
        <Item>
          <Item.Image size='tiny' src={animal.image} />
          <Item.Content verticalAlign='middle'>
            <Item.Header as='a'>
              <Link to="/animalinfo">
                <p onClick={this.handleClick}>{animal.species}</p>
              </Link>
            </Item.Header>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
}


export default connect(null, {changeAnimal})(AnimalCard);
