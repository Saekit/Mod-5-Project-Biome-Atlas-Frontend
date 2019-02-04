import {LOAD_ANIMALS, CHANGE_ANIMAL, ADD_ANIMAL} from '../actions/animalActions'
import {LOAD_PLANTS, CHANGE_PLANT} from '../actions/plantActions'
import {LOAD_BIOMES, CHANGE_BIOME} from '../actions/biomeActions'

const initialState = {
  animals: [],
  plants: [],
  biomes: [],
  chosenBiome: {},
  chosenAnimal: {},
  chosenPlant: {}
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
    case CHANGE_BIOME: {
      return {...state, chosenBiome: action.payload}
    }
    case CHANGE_ANIMAL: {
      return {...state, chosenAnimal: action.payload}
    }
    case CHANGE_PLANT: {
      return {...state, chosenPlant: action.payload}
    }
    case ADD_ANIMAL: {
      const newAnimalArr = [...state.animals, action.payload]
      return {...state, animals: newAnimalArr}
    }
    default:
      return state
  }
}
export default reducer;
