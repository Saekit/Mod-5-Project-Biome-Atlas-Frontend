import React, { Component } from 'react';
import {Form, Radio } from 'semantic-ui-react'

class QuizCard extends Component {

  state = {
    answers: [],
    value: ""
  }

  handleChange = (e, {value}) => {
    this.setState({
      value
    })
    this.props.idHandler(this.props.qa.id, value)
  }


  shuffle = (array) => {
    let currentIndex = array.length, tempVal, randomIndex
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      tempVal = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = tempVal
    }
    return array
  }

  componentDidMount(){
    let {qa} = this.props
    let answers = [qa.correct, qa.wrong1, qa.wrong2, qa.wrong3]
    this.setState({
      answers: this.shuffle(answers)
    })
  }

  render(){
    const { value } = this.state
    let {qa} = this.props
    let answers = this.state.answers.map((ans, idx)=>
      <Form.Field
        key={idx}
        control={Radio}
        label={ans}
        name={qa.id}
        value={ans}
        checked={value === ans}
        onChange={this.handleChange}
      />)

    return(
      <Form>
        <label>{qa.question}</label>
        {answers}
        <hr />
      </Form>
    )
  }
}
export default QuizCard;
