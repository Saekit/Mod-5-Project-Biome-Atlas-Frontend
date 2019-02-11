import React, { Component } from 'react';
import Button from './Button'

class QuizEnd extends Component {

  clickHandler = () => {
     window.location.reload()
   }


  render() {
    const { score } = this.props
    return (
      <div className='mha container--q'>
        <h4>You scored a {score}/5!</h4>
        <p>{score > 3 ? 'Good job, you know your animals!' : 'Study up and try again!'}</p>
        <Button classes={`f jcb cw`} clickHandle={() => this.clickHandler()}>
          Try Again
        </Button>
      </div>
    )
  }
}
export default QuizEnd;
