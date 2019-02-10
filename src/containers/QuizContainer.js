import React, { Component } from 'react';
import QuizCard from '../components/QuizCard'
import {Form, Container} from 'semantic-ui-react'

const answerKey = {
  1: "Taiga",
  2: "Tundra",
  3: "Aquatic",
  4: "Desert",
  5: "Rainforest",
  6: "Dumbo Octopus",
  7: "Lemming",
  8: "Armadillo Girdled Lizard",
  9: "Okapi",
  10: "Red-Crowned Crane"
}

class QuizContainer extends Component {

  state = {
    score: 0,
    showForm: "hidden",
  }

  idHandler = (id, answer) => {
    this.setState({
      [id]: answer
    })
  }

  submitHandler = (e) => {
    let length = Object.keys(answerKey).length
    let i = 0;
    while (i < length){
      if (answerKey[i+1] === this.state[i+1]){
        this.setState({
          score: this.state.score += 1,
        })
      }
      }
      i++;
    this.setState({
      showForm: "show"
    })
    return this.state.score
  }

  clickHandler = () => {
    window.location.reload()
  }


  render(){

    let qa = this.props.questionsAnswers.map((qa, idx)=> {
      return <QuizCard key={idx} qa={qa} idHandler={this.idHandler} /> })

    return(
      <Container fluid >

      <div className={this.state.showForm}>
        <h3>You got {this.state.score}/10!</h3>
        <button onClick={this.clickHandler}>Retake Quiz</button>
      </div>

      <Form onSubmit={this.submitHandler}>
        <h3>{qa}</h3>
        <Form.Button>Submit</Form.Button>
      </Form>

      </Container>
    )
  }
}
export default QuizContainer;
