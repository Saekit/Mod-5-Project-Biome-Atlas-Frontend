export const LOAD_ANIMALS = 'LOAD_ANIMALS'
export const CHANGE_ANIMAL = 'CHANGE_ANIMAL'

export const getAnimals = () => {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/v1/animals')
      .then(res=>res.json())
      .then(animals => {
        dispatch({
          type: LOAD_ANIMALS,
          payload: animals
        })
      })
      .catch(console.error)
  }
}
export const changeAnimal = (animal) => {
  return {
    type: CHANGE_ANIMAL,
    payload: animal
  }
}
