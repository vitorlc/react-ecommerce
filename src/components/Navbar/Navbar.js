import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart, KeyboardBackspace } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import useStyles from './styles'

const Navbar = ({ cartCount, isCart }) => {
  const history = useHistory()
  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed" >
        <Toolbar>
          <Typography className={classes.title}>REACT E-COMMERCE</Typography>
          {isCart ? 
            <IconButton onClick={() => history.push("/")} aria-label="Voltar" className={classes.icon}>
              <KeyboardBackspace />
            </IconButton>
            :
            <IconButton onClick={() => history.push("/carrinho")} aria-label="Carrinho" className={classes.icon}>
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
