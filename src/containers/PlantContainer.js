import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getPlants} from '../actions/plantActions'
import PlantCard from '../components/PlantCard'

class PlantContainer extends React.Component {


  componentDidMount(){
    this.props.getPlants()
  }


  render(){
    let plant = this.props.plants.map(plant => <PlantCard key={plant.id} plant={plant} />)
    return(
      <div>
        {plant}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    plants: state.plants
  }
}
function mapDispatchToProps(dispatch){
  return {
    getPlants: bindActionCreators(getPlants, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlantContainer);
