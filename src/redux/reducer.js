import {LOAD_ANIMALS} from '../actions/animalActions'
import {LOAD_PLANTS} from '../actions/plantActions'
import {LOAD_BIOMES} from '../actions/biomeActions'

const initialState = {
  animals: [],
  plants: [],
  biomes: []
}
const reducer = (state = initialState, action) => {
  switch(action.type){
    case LOAD_ANIMALS: {
      return {...state, animals: action.payload}
    }
    case LOAD_PLANTS: {
      return {...state, plants: action.payload}
    }
    case LOAD_BIOMES: {
      return {...state, biomes: action.payload}
    }
    default:
      return state
  }
}
export default reducer;
