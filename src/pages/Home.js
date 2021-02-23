import React,  { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import axios from 'axios'

import { addItemCart } from "../actions"
import { useDispatch } from "react-redux"

import { Navbar, ProductsList } from '../components'

const Home = () => {
  const [ products, setProducts ] = useState([])
  const store = useSelector(state => state.cartState)
  const dispatch = useDispatch()

  useEffect (() => {
    axios.get("https://api-desafio-front.justdigital.com.br/").then(res => {
      setProducts(res.data.products)
    }).catch(e => console.log(e))
  }, [])

  return (
    <div>
      <Navbar cartCount={store.products.length}/>
      <ProductsList products={products}/>
    </div>
  )
}

export default Home
