import React, { Component } from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom'
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import AnimalContainer from './containers/AnimalContainer'
import PlantContainer from './containers/PlantContainer'
import BiomeContainer from './containers/BiomeContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Carousel />
        <Switch>
          <Route
            path="/animals"
            component={AnimalContainer}
            />
          <Route
            path="/plants"
            component={PlantContainer}
            />
          <Route
            path="/"
            component={BiomeContainer}
            />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
