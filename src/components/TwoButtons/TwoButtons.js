import React from 'react'
import { Grid } from '@material-ui/core'
import FormFieldPadding from '../Form/FormFieldPadding'
import ButtonComponent from '../Button'

const TwoButtons = ({
  disableFirst,
  disableSecond,
  titleFirst,
  handleClickFirst,
  titleSecond,
  handleClickSecond,
  variantFirst,
  justify,
  style,
  mobile
}) => (
  <FormFieldPadding style={style}>
    <Grid
      container
      alignItems='center'
      justify={justify || 'flex-end'}
      spacing={1}
    >
      <Grid item>
        <ButtonComponent
          disabled={disableFirst}
          variant={variantFirst || 'outlined'}
          onClick={handleClickFirst}
          size={mobile ? 'medium' : 'small'}
          mobile={mobile}
        >
          {titleFirst}
        </ButtonComponent>
      </Grid>
      <Grid item>
        <ButtonComponent
          disabled={disableSecond}
          onClick={handleClickSecond}
          mobile={mobile}
        >
          {titleSecond}
        </ButtonComponent>
      </Grid>
    </Grid>
  </FormFieldPadding>
)
export default TwoButtons
