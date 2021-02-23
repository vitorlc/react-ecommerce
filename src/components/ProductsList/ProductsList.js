import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import Product from '../Product/Product'

import axios from 'axios'


const ProductsList = () => {
  const [ products, setProducts ] = useState([])

  useEffect (() => {
    axios.get("https://api-desafio-front.justdigital.com.br/").then(res => {
      setProducts(res.data.products)
    }).catch(e => console.log(e))
  }, [])

  return (
    <main>
      <Grid container justify="center" spacing="{4}">
        {products.map((product)=> (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={2}>
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </main>
      
  )
}

export default ProductsList
