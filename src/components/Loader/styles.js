import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  loader: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: '100vh',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    zIndex: '1000000'
  }
}))
