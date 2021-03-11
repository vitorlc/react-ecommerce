import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    height: 500,
    display: 'flex',
    flexFlow: 'row wrap',
    padding: 5
  },
  media: {
    flex: 1,
    height: '30vh',
  },
  cardActions: {
    flex: 1,
    justifyContent: 'space-around',
  }
}))