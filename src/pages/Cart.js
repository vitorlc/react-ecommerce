import React from 'react'
import { useSelector } from "react-redux"
import { Typography, ButtonBase } from '@material-ui/core'

import { ProductsList, Navbar } from '../components'

const Cart = () => {
  const store = useSelector(state => state.cartState)

  const calculateTotal = (products) => {
    return products.reduce((accum, curr) => accum + curr.price , 0)
  }

  return (
    <div>
      <Navbar isCart={true} />
      <ProductsList products={store.products} isCart={true}></ProductsList>
      <div style={{}}>
        <Typography variant="h6">Total: {`R$ ${calculateTotal(store.products)}`}</Typography>
        <ButtonBase style={{}}>
          <span style={{}}>Finalizar Compra</span>
        </ButtonBase>
      </div>
    </div>
  )
}

export default Cart
