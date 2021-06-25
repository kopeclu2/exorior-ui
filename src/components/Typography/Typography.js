import React from 'react'
import { Typography as MUITypography } from '@material-ui/core'
import { useStyles } from './styles'
import { cond, equals } from 'ramda'

const Typography = ({
  children,
  variant,
  component,
  style,
  color,
  align,
  ...other
}) => {
  const classes = useStyles()

  const getVariant = (variant) =>
    cond([
      [equals('h1'), () => classes.h1],
      [equals('h2'), () => classes.h2],
      [equals('h3'), () => classes.h3],
      [equals('p'), () => classes.p],
      [equals('pBold'), () => classes.pBold],
      [equals('navText'), () => classes.navText],
      [equals('navTextActive'), () => classes.navTextActive],
      [equals('collapseNavItemText'), () => classes.collapseNavItemText],
      [
        equals('collapseNavItemTextActive'),
        () => classes.collapseNavItemTextActive
      ],
      [equals('wrapperHeading'), () => classes.wrapperHeading],
      [equals('underTableHeading'), () => classes.underTableHeading],
      [equals('cardFormHeading'), () => classes.cardFormHeading]
    ])(variant)

  return (
    <MUITypography
      {...other}
      align={align}
      color={color}
      style={style}
      component={!component ? 'span' : component}
      className={getVariant(variant)}
    >
      {children}
    </MUITypography>
  )
}

export default Typography
