import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress'
import { useStyles } from './styles'
import PropTypes from 'prop-types'

const Loader = ({ isLoading }) => {
  const classes = useStyles()

  return isLoading ? (
    <div className={classes.loader}>
      <CircularProgress color='primary' size={75} />
    </div>
  ) : null
}

Loader.propTypes = {
  /** Should be Loader present **/
  isLoading: PropTypes.bool
}

export default Loader
