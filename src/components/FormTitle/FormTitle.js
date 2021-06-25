import React from 'react'
import { Grid } from '@material-ui/core'
import Typography from '../Typography'
import ArrowBack from '../../svg/arrowBack.svg'
import { useStyles } from './styles'

const FormTitle = ({ children, handleBack }) => {
  const classes = useStyles()

  const withArrrowBack = (
    <div onClick={handleBack} className={classes.cursor}>
      <img src={ArrowBack} alt='ArrowBack' className={classes.arrowBack} />
    </div>
  )

  return (
    <Grid container justify='center' alignItems='center' direction='row'>
      <Grid item container justify='flex-start' alignItems='center'>
        {handleBack && withArrrowBack}
        <Typography variant='cardFormHeading'>{children}</Typography>
      </Grid>
    </Grid>
  )
}
export default FormTitle
