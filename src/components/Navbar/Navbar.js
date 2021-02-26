import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart, KeyboardBackspace } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'

const Navbar = ({ cartCount, isCart }) => {
  let history = useHistory()
  return (
    <>
      <AppBar position="fixed" >
        <Toolbar>
          <Typography>REACT E-COMMERCE</Typography>
          {isCart ? 
            <IconButton onClick={() => history.push("/")} aria-label="Voltar" style={{ position: 'absolute', right: 0 }}>
              <KeyboardBackspace />
            </IconButton>
            :
            <IconButton onClick={() => history.push("/carrinho")} aria-label="Carrinho" style={{ position: 'absolute', right: 0 }}>
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          }
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
