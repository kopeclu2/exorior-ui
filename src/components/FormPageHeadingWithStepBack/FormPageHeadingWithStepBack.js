import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Typography from '../Typography'
import PageWrapper from '../PageWrapper'
import { Grid } from '@material-ui/core'
import ArrowBack from './arrowBack.png'
import { useStyles } from './styles'
import Button from '../Button'

const FormPageHeadingWithStepBack = ({
  children,
  to,
  goBack,
  title,
  history
}) => {
  const classes = useStyles()
  const arrowBackContent = (
    <Typography variant='wrapperHeading'>
      <Grid container justify='center' alignItems='center' direction='row'>
        <Grid item className={classes.displayFlex}>
          <img src={ArrowBack} alt='ArrowBack' className={classes.arrowBack} />
        </Grid>
        <Grid item>{title}</Grid>
      </Grid>
    </Typography>
  )
  const back = goBack ? (
    <Button variant='empty' disableRipple onClick={() => history.goBack()}>
      {arrowBackContent}
    </Button>
  ) : (
    <Link to={to}>{arrowBackContent}</Link>
  )

  return <PageWrapper headingBar={back}>{children}</PageWrapper>
}
export default withRouter(FormPageHeadingWithStepBack)
