import { cartReducer } from './cartReducer'
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  cartState: cartReducer
}) 