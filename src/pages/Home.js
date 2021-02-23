import React from 'react'
import { useSelector, useDispatch } from "react-redux"

import { Navbar, ProductsList } from '../components'

const Home = () => {
  const store = useSelector(state => state.cartState)
  const dispatch = useDispatch()
  return (
    <div>
      <Navbar cartCount={store.products.length}/>
      <ProductsList/>
    </div>
  )
}

export default Home
