import React from 'react'
import { TableCell as MUITableCell } from '@material-ui/core'
import { useStyles } from './styles'

const TableCell = ({ children, align, heading }) => {
  const classes = useStyles()

  return (
    <MUITableCell
      align={align}
      classes={{ root: classes.root }}
      className={heading ? classes.heading : ''}
    >
      {children}
    </MUITableCell>
  )
}

export default TableCell
