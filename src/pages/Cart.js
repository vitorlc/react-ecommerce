import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { Typography, ButtonBase } from '@material-ui/core'

import { ProductsList, Navbar } from '../components'

const Cart = () => {
  const store = useSelector(state => state.cartState)
  const [cart, setCart] = useState([])
  const [cartCost, setCartCost] = useState(0)

  useEffect(() => {
    setCart([])
    setCartCost(0)
    if (store.products.length) {
      let cost = 0
      let cartArray = store.products.reduce( (acc, cur) => {
        let found = acc.find(e=> e.id === cur.id)
        if(found) {
          found.count +=1
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

  return (
    <div>
      <Navbar isCart={true} />
      <ProductsList products={cart} isCart={true}></ProductsList>
      <div style={{}}>
        <Typography variant="h6">Total: {`R$ ${cartCost}`}</Typography>
        <ButtonBase style={{}}>
          <span style={{}}>Finalizar Compra</span>
        </ButtonBase>
      </div>
    </div>
  )
}

export default Cart
