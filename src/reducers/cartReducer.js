import { ADD_ITEM } from '../actions/actionTypes'

const initialState = {
  products: []
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: 
      return {...state, gamesCart: [...state.products, action.item]}
    default: 
      return state
  }
} 