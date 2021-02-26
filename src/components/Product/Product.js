import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

function Product({ product, handleClick, isCart }) {
  return (
    <Card style={{ margin: 10, height: 400 }}>
      <CardMedia image="" title={product.name} />
      <img src={product.picture} width="200" height="150"></img>
      <CardContent>
        <Typography variant="body1">
          {product.title}
        </Typography>
      </CardContent>
      {
        isCart ? 
          <CardActions disableSpacing style={{ marginTop: 'auto' }}>
            <Typography variant="h6">
              R$ {product.price}
            </Typography>
          </CardActions>
          :
          <CardActions disableSpacing style={{ marginTop: 'auto' }}>
            <Typography variant="h6">
              R$ {product.price}
            </Typography>
            <IconButton aria-label="Adicione ao Carrinho" onClick={() => handleClick(product)} style={{ marginLeft: 'auto' }}>
              <AddShoppingCart />
            </IconButton>
          </CardActions>
      }
    </Card>
  )
}

export default Product
