import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import useStyles from './styles'

function Product({ product, handleClick, isCart, handleIncrement, handleDecrement }) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.picture} title={product.name} />
      <CardContent className={classes.cardContent}>
        <Typography variant="body1">
          {product.title}
        </Typography>
      </CardContent>
      {
        isCart ? 
          <CardActions disableSpacing className={classes.cardActions}>
            <ButtonGroup aria-label="small outlined button group">
              <Button onClick={() => handleIncrement(product)}>+</Button>
              <Button>{product.count}</Button>
              <Button onClick={() => handleDecrement(product)}>-</Button>
            </ButtonGroup>
            <Typography variant="h6">
              R$ {product.price}
            </Typography>
          </CardActions>
          :
          <CardActions disableSpacing className={classes.cardActions}>
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
