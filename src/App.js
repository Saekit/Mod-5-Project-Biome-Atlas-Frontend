import React, { Component } from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom'
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import BiomeContainer from './containers/BiomeContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Carousel />
        <Switch>
          <Route
            path="/biome"
            component={BiomeContainer}
            />
            <Route
              path="/"
              render={()=><h1>Home</h1>}
              />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
