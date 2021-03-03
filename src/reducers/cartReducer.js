import { ADD_ITEM } from '../actions/actionTypes'
import { REMOVE_ITEM } from '../actions/actionTypes'

const initialState = {
  products: []
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: 
      return {...state, products: [...state.products, action.item]}
    case REMOVE_ITEM: 
      return {...state, products: state.products.reduce((acc, cur) => {
          if (cur.id == action.item.id && cur.count !== 1) {
            cur.count = cur.count - 1
            acc.push(cur)
          } else if (cur.id !== action.item.id) {
            acc.push(cur)
          } 
          return acc
        }, [])
      }
    default: 
      return state
  }
} 