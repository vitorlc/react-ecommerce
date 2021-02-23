import React from 'react'
import { Grid } from '@material-ui/core'
import Product from '../Product/Product'

const ProductsList = ({products, handleClick}) => {
  return (
    <main>
      <Grid container justify="center" spacing="{4}">
        {products.map((product)=> (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={2}>
            <Product product={product} handleClick={handleClick}/>
          </Grid>
        ))}
      </Grid>
    </main>
      
  )
}

export default ProductsList
