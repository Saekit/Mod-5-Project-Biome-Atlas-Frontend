import React, { Component } from 'react';
import Button from './Button'

class QuizStart extends Component {
  render(){
    return(
      <div>
        <h4>Welcome to Animal Quiz</h4>
        <Button classes={`f jcb mt1 regular bold cw`} clickHandle={() => this.props.next()}>
        Start Quiz
        </Button>
      </div>
    )
  }
}
export default QuizStart
