import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getBiomes} from '../actions/biomeActions'
import Carousel from '../components/Carousel';

class HomeContainer extends React.Component {

  componentDidMount(){
    this.props.getBiomes()
  }


  render(){
    let biome = this.props.biomes.map(biome => <Carousel key={biome.id} biome={biome} />)
    return(
      <div>
      {biome}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    biomes: state.biomes
  }
}
function mapDispatchToProps(dispatch){
  return {
    getBiomes: bindActionCreators(getBiomes, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
