export const LOAD_BIOMES = 'LOAD_BIOMES'

export const getBiomes = () => {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/v1/biomes')
      .then(res=>res.json())
      .then(biomes => {
        dispatch({
          type: LOAD_BIOMES,
          payload: biomes
        })
      })
      .catch(console.error)
  }
}
