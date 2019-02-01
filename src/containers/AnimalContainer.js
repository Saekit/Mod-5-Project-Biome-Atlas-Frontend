import React from 'react';
import AnimalCard from '../components/AnimalCard';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getAnimals} from '../actions/animalActions'

class AnimalContainer extends React.Component {

  componentDidMount(){
    this.props.getAnimals()
  }


  render(){
    let animal = this.props.animals.map(animal => <AnimalCard key={animal.id} animal={animal} />)
    return(
      <div>
      {animal}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    animals: state.animals
  }
}
function mapDispatchToProps(dispatch){
  return {
    getAnimals: bindActionCreators(getAnimals, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AnimalContainer);
