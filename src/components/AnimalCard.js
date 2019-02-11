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
    let noSciName = animal.species.replace(/ *\([^)]*\) */g, "")
    return(
      <Item.Group className="border">
        <Item>
          <img className="list-image" src={animal.image} /><br />
          <Item.Content verticalAlign='middle'>
            <Item.Header as='a'>
              <Link to="/animalinfo">
                <p className="list-color" onClick={this.handleClick}>{noSciName}</p>
              </Link>
            </Item.Header>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
}


export default connect(null, {changeAnimal})(AnimalCard);
