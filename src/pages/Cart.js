import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"

import { addItemCart, removeItemCart } from "../actions"
import { ProductsList, Navbar, CartFooter } from '../components'

const Cart = () => {
  const store = useSelector(state => state.cartState)
  const dispatch = useDispatch()
  const [cart, setCart] = useState([])
  const [cartCost, setCartCost] = useState(0)

  useEffect(() => {
    setCart([])
    setCartCost(0)
    if (store.products.length) {
      let cost = 0
      let cartArray = store.products.reduce((acc, cur) => {
        let found = acc.find(e => e.id === cur.id)
        if (found) {
          found.count += 1
        } else {
          cur.count = 1
          acc.push(cur)
        }
        return acc
      }, [])
      for (let item of cartArray) {
        cost += (item.price * item.count)
        setCart(prevArray => [...prevArray, item])
      }
      setCartCost(cost)
    }
  }, [store.products])

  const handleIncrement = (product) => {
    dispatch(addItemCart(product))
  }

  const handleDecrement = (item) => {
    dispatch(removeItemCart(item))
  }


  return (
    <div>
      <Navbar isCart={true} />
      <ProductsList products={cart} isCart={true} handleDecrement={handleDecrement} handleIncrement={handleIncrement}></ProductsList>
      <CartFooter cartCost={cartCost} />
    </div>
  )
}

export default Cart
