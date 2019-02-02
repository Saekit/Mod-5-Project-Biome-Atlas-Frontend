import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Route, Switch, withRouter} from 'react-router-dom'
import NavBar from './components/NavBar';
import AnimalContainer from './containers/AnimalContainer'
import PlantContainer from './containers/PlantContainer'
import HomeContainer from './containers/HomeContainer'
import BiomeContainer from './containers/BiomeContainer'
import AnimalInfoContainer from './containers/AnimalInfoContainer'
import PlantInfoContainer from './containers/PlantInfoContainer'
import {bindActionCreators} from 'redux'
import {getPlants} from './actions/plantActions'
import {getAnimals} from './actions/animalActions'


class App extends Component {

  componentDidMount(){
    this.props.getPlants()
    this.props.getAnimals()
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            path="/animals"
            render={() => <AnimalContainer animals={this.props.animals}/>}
            />
          <Route
            path="/plants"
            render={() => <PlantContainer plants={this.props.plants}/>}
            />
          <Route
            path="/biome"
            component={BiomeContainer}
            />
          <Route
            path="/animalinfo"
            component={AnimalInfoContainer}
            />
          <Route
            path="/plantinfo"
            component={PlantInfoContainer}
            />
          <Route
            path="/"
            component={HomeContainer}
            />
        </Switch>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    plants: state.plants,
    animals: state.animals,
    chosenBiome: state.chosenBiome,
  }
}
function mapDispatchToProps(dispatch){
  return {
    getPlants: bindActionCreators(getPlants, dispatch),
    getAnimals: bindActionCreators(getAnimals, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
