import React from 'react'
import { useSelector } from "react-redux"

import { ProductsList, Navbar } from '../components'

const Cart = () => {
  const store = useSelector(state => state.cartState)
  return (
    <div>
      <Navbar/>
      <ProductsList products={store.products}></ProductsList>
    </div>
  )
}

export default Cart
