import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {changeAnimal} from '../actions/animalActions'


class AnimalCard extends React.Component {

  handleClick = () => {
    this.props.changeAnimal(this.props.animal)
  }

  render(){
    let animal = this.props.animal
    return(
      <div>
      <ul>
        <Link to="/animalinfo"><li onClick={this.handleClick}>Species: {animal.species}</li></Link>
      </ul>
      <hr />
      </div>
    )
  }
}


export default connect(null, {changeAnimal})(AnimalCard);
