import React from 'react'
import { TableRow as MUITableRow } from '@material-ui/core'
import { useStyles } from './styles'

const TableRow = React.forwardRef(({ children, disabled, ...props }, ref) => {
  const classes = useStyles()

  return (
    <MUITableRow
      ref={ref}
      {...props}
      className={disabled ? classes.tableRowDisabled : ''}
    >
      {children}
    </MUITableRow>
  )
})

export default TableRow
