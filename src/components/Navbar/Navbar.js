import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

const Navbar = ({cartCount}) => {
  return (
    <>
      <AppBar position="fixed" >
        <Toolbar>
          <Typography>REACT E-COMMERCE</Typography>
          <IconButton aria-label="Carrinho" style={{position: 'absolute', right: 0}}>
            <Badge badgeContent={cartCount} color="secondary">
              <ShoppingCart/>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
