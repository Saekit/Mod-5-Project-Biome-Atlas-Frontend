export const LOAD_QANDA = 'LOAD_QANDA'

export const getQuestionsAnswers = () => {
  return (dispatch) => {
    return fetch('https://biome-atlas-backend.herokuapp.com/api/v1/question_answers')
      .then(res=>res.json())
      .then(questionsAnswers => {
        dispatch({
          type: LOAD_QANDA,
          payload: questionsAnswers
        })
      }).catch(console.err)
  }
}
