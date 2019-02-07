import React, { Component } from 'react';
import QuizCard from '../components/QuizCard'
import {Form } from 'semantic-ui-react'


class QuizContainer extends Component {

  state = {}

  idHandler = (id, answer) => {
    this.setState({
      [id]: answer
    })
  }

  submitHandler = () => {
    
  }


  render(){
    console.log(this.state);
    let qa = this.props.questionsAnswers.map((qa, idx)=> {
      return <QuizCard key={idx} qa={qa} idHandler={this.idHandler} /> })
    return(
      <Form onSubmit={this.submitHandler}>
        <h3>{qa}</h3>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}
export default QuizContainer;
