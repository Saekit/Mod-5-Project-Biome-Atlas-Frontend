import React, { Component } from 'react';
import QuizCard from '../components/QuizCard'
import {Form } from 'semantic-ui-react'


class QuizContainer extends Component {
  render(){
    let qa = this.props.questionsAnswers.map(qa=> <QuizCard key={qa.id} qa={qa} />)
    return(
      <Form>
        <h3>{qa}</h3>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}
export default QuizContainer;
