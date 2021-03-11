import { Box } from '@material-ui/core'
import { Typography, Button } from '@material-ui/core'
import useStyles from './styles'

const CartFooter = ({cartCost}) => {
  const classes = useStyles()
  return (
    <Box className={classes.footer} boxShadow={4}>
      <Typography className={classes.text}> Total: {`R$ ${cartCost}`}</Typography>
      <Button variant="contained" color="primary" className={classes.button}>
        Finalizar Compra
      </Button>
    </Box>
  )
}

export default CartFooter