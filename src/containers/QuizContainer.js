import React, { Component } from 'react';
// import QuizCard from '../components/QuizCard'
import { Strider, Step } from 'react-strider';
import cx from 'classnames'
import QuizSingle from '../components/QuizSingle'
import QuizStart from '../components/QuizStart'
import QuizEnd from '../components/QuizEnd'
import Button from "../components/Button";

class QuizContainer extends Component{

  state = {
    correct: 0 //total right answers start at 0
  }

  pushAnswer = (next) => {
    let count = this.state.correct
    this.setState({
      correct: count += 1
    })
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

  render() {
    const {questionsAnswers} = this.props
    // console.log(this.state.correct);
    return(
      <div className='f jcc aic site quiz-body'>
        <div>
          <h1>Animal Quiz</h1>
          <Strider activeIndex='0' transitionSpeed={300} >
            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div className={cx('step_wrapper', {
                  'is-active': active,
                  'is-hiding': hiding
                })}>
                  <QuizStart next={next} />
                </div>
              )}
            </Step>

            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div className={cx('step_wrapper', {
                  'is-active': active,
                  'is-hiding': hiding
                })}>
                  <QuizSingle {...this.props}
                    pushAnswer={this.pushAnswer}
                    number={activeIndex}
                    next={next}
                    item={this.props.questionsAnswers[activeIndex-1]}
                    shuffled={this.shuffle(this.props.questionsAnswers[activeIndex-1].choices)}
                     />
                </div>
              )}
            </Step>

            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div className={cx('step_wrapper', {
                  'is-active': active,
                  'is-hiding': hiding
                })}>
                  <QuizSingle {...this.props}
                    pushAnswer={this.pushAnswer}
                    number={activeIndex}
                    next={next}
                    item={this.props.questionsAnswers[activeIndex-1]}
                    shuffled={this.shuffle(this.props.questionsAnswers[activeIndex-1].choices)}/>
                </div>
              )}
            </Step>

            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div className={cx('step_wrapper', {
                  'is-active': active,
                  'is-hiding': hiding
                })}>
                  <QuizSingle {...this.props}
                    pushAnswer={this.pushAnswer}
                    number={activeIndex}
                    next={next}
                    item={this.props.questionsAnswers[activeIndex-1]}
                    shuffled={this.shuffle(this.props.questionsAnswers[activeIndex-1].choices)}/>
                </div>
              )}
            </Step>

            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div className={cx('step_wrapper', {
                  'is-active': active,
                  'is-hiding': hiding
                })}>
                  <QuizSingle {...this.props}
                    pushAnswer={this.pushAnswer}
                    number={activeIndex}
                    next={next}
                    item={this.props.questionsAnswers[activeIndex-1]}
                    shuffled={this.shuffle(this.props.questionsAnswers[activeIndex-1].choices)}/>
                </div>
              )}
            </Step>

            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div className={cx('step_wrapper', {
                  'is-active': active,
                  'is-hiding': hiding
                })}>
                  <QuizSingle {...this.props}
                    pushAnswer={this.pushAnswer}
                    number={activeIndex}
                    next={next}
                    item={this.props.questionsAnswers[activeIndex-1]}
                    shuffled={this.shuffle(this.props.questionsAnswers[activeIndex-1].choices)}/>
                </div>
              )}
            </Step>

            <Step>
              {({ active, hiding, activeIndex }) => (
                <div className={cx('step_wrapper', {
                  'is-active': active,
                  'is-hiding': hiding
                })}>
                  <QuizEnd {...this.props} score={this.state.correct} />
                </div>
              )}
            </Step>

          </Strider>
        </div>
      </div>
    )
  }
}
export default QuizContainer;


// const answerKey = {
//   1: "Taiga",
//   2: "Tundra",
//   3: "Aquatic",
//   4: "Desert",
//   5: "Rainforest",
//   6: "Dumbo Octopus",
//   7: "Lemming",
//   8: "Armadillo Girdled Lizard",
//   9: "Okapi",
//   10: "Red-Crowned Crane"
// }
//
// class QuizContainer extends Component {
//
//   state = {
//     score: 0,
//     showForm: "hidden",
//   }
//
//   idHandler = (id, answer) => {
//     this.setState({
//       [id]: answer
//     })
//   }
//
//   submitHandler = (e) => {
//     let length = Object.keys(answerKey).length
//     let i = 0;
//     while (i < length){
//       if (answerKey[i+1] === this.state[i+1]){
//         this.setState({
//           score: this.state.score += 1,
//         })
//       }
//       }
//       i++;
//     this.setState({
//       showForm: "show"
//     })
//     return this.state.score
//   }
//
//   clickHandler = () => {
//     window.location.reload()
//   }
//
//
//   render(){
//
//     let qa = this.props.questionsAnswers.map((qa, idx)=> {
//       return <QuizCard key={idx} qa={qa} idHandler={this.idHandler} /> })
//
//     return(
//       <Container fluid >
//
//       <div className={this.state.showForm}>
//         <h3>You got {this.state.score}/10!</h3>
//         <button onClick={this.clickHandler}>Retake Quiz</button>
//       </div>
//
//       <Form onSubmit={this.submitHandler}>
//         <h3>{qa}</h3>
//         <Form.Button>Submit</Form.Button>
//       </Form>
//
//       </Container>
//     )
//   }
// }
// export default QuizContainer;
