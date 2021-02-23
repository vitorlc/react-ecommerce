import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

function Product({ product }) {
  return (
    <Card style={{ margin: 10 }}>
      <CardMedia image="" title={product.name} />
      <img src={product.picture} width="200" height="200"></img>
      <CardContent>
        <Typography variant="h5">
          {product.title}
        </Typography>
        <Typography variant="h5">
          R$ {product.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Adicione ao Carrinho">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product
