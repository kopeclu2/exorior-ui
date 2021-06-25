import React from 'react'
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { isEmpty } from 'ramda'
import Pagination from '@material-ui/lab/Pagination'

const TablePagination = ({
  paginationInfo,
  onPageSizeChange,
  onPageNumberChange
}) => {
  const { totalPages, elementsPerPage, pageNumber } = paginationInfo

  if (isEmpty(paginationInfo)) {
    return <div />
  }

  return (
    <Grid container justify='flex-end' alignContent='center'>
      <Select
        value={elementsPerPage}
        disableUnderline
        onChange={(event) => onPageSizeChange(event.target.value)}
      >
        {[10, 25, 50].map((valueOfElementsOnPage) => (
          <MenuItem key={valueOfElementsOnPage} value={valueOfElementsOnPage}>
            {valueOfElementsOnPage}
          </MenuItem>
        ))}
      </Select>
      <Pagination
        count={totalPages}
        color='primary'
        onChange={(e, value) => onPageNumberChange(value)}
        page={pageNumber + 1}
      />
    </Grid>
  )
}

export default TablePagination
