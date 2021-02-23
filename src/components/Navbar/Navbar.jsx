import React, { StyleSheet } from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" >
        <Toolbar>
          <Typography>REACT E-COMMERCE</Typography>
          <IconButton aria-label="Carrinho" style={{position: 'absolute', right: 0}}>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCart/>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
