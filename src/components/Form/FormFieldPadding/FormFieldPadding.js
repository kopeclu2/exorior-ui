import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from './styles'

const FormFieldPadding = ({ children, justify, spacing, smaller }) => {
  const classes = useStyles()
  return (
    <Grid
      item
      container
      justify={justify || 'flex-start'}
      alignItems='center'
      className={
        smaller ? classes.formFieldPaddingSmaller : classes.formFieldPadding
      }
      spacing={spacing}
    >
      {children}
    </Grid>
  )
}
export default FormFieldPadding
