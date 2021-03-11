import React from 'react'
import { Grid } from '@material-ui/core'
import Product from '../Product/Product'
import useStyles from './styles'

const ProductsList = ({ products, handleClick, isCart, handleDecrement, handleIncrement }) => {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} handleClick={handleClick} isCart={isCart} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default ProductsList
