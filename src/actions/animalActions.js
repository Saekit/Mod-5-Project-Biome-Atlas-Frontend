export const LOAD_ANIMALS = 'LOAD_ANIMALS'

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
