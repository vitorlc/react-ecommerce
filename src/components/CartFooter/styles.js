import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  footer: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    margin: 10,
    padding: 20,
    position: 'fixed',
    boxSizing: 'border-box',
    display: 'flex',
    flexFlow: 'row wrap',
    backgroundColor: '#ffffff'
  },
  text: {
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold'
  },
  button: {
    height: '80%',
    fontSize: 20,
    fontWeight: 'bold'
  }
}))