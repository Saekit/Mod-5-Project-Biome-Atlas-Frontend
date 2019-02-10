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
import FormContainer from './containers/FormContainer'
import QuizContainer from './containers/QuizContainer'
import {bindActionCreators} from 'redux'
import {getPlants} from './actions/plantActions'
import {getAnimals} from './actions/animalActions'
import {getQuestionsAnswers} from './actions/quizActions'


class App extends Component {

  state = {
    filteredList: [],
    search: ""
  }

  componentDidMount(){
    this.props.getPlants()
    this.props.getAnimals()
    this.props.getQuestionsAnswers()
  }


    changeHandler = (e, search) => {
      this.setState({
        search: e.target.value
      })
    }

  render() {
    return (
      <div className="App">
        <NavBar animals={this.props.animals} plants={this.props.plants} questionsAnswers={this.props.questionsAnswers} changeHandler={this.changeHandler} search={this.state.search}/>
        <Switch>
          <Route
            path="/animals"
            render={() => <AnimalContainer animals={this.props.animals} search={this.state.search}/>}
            />
          <Route
            path="/plants"
            render={() => <PlantContainer plants={this.props.plants} search={this.state.search}/>}
            />
          <Route
            path="/biome"
            render={() => <BiomeContainer search={this.state.search}/>}
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
            path="/form"
            component={FormContainer}
            />
          <Route
            path="/quiz"
            render={()=> <QuizContainer questionsAnswers={this.props.questionsAnswers}/>}
            />
          <Route
            path="/"
            render={() => <HomeContainer/>}
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
    questionsAnswers: state.questionsAnswers
  }
}
function mapDispatchToProps(dispatch){
  return {
    getPlants: bindActionCreators(getPlants, dispatch),
    getAnimals: bindActionCreators(getAnimals, dispatch),
    getQuestionsAnswers: bindActionCreators(getQuestionsAnswers, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
