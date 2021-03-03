import { ADD_ITEM } from './actionTypes'
import { REMOVE_ITEM } from './actionTypes'

export const addItemCart = value => ({
  type: ADD_ITEM,
  item: value
})

export const removeItemCart = value => ({
  type: REMOVE_ITEM,
  item: value
})