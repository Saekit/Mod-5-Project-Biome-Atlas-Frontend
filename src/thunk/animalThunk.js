import {loadAnimals} from '../actions/animalActions'
export const getAnimals = () => {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/v1/animals')
      .then(res=>res.json())
      .then(data => dispatch(data))
      .catch(console.error)
  }
}
