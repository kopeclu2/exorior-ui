import React, { useEffect, useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import Pagination from '@material-ui/lab/Pagination';
import TableBodyCell from './TableBodyCell';
import { Grid, MenuItem, Select } from '@material-ui/core';
import { isEmpty, isNil } from 'ramda';

const TablePaginator = ({
    handleChangePage,
    handleChangeRowsPerPage,
    headKeys,
    pageNumber,
    rows,
    hasNextPage,
    elementsPerPage,
    totalPages,
}) => {
    const [selectedPage, setSelectedPage] = useState(0);

    const [perPage, setPerPage] = useState(5);

    useEffect(() => {
        if (!isNil(pageNumber)) {
            setSelectedPage(pageNumber);
        }
    }, [pageNumber]);

    useEffect(() => {
        if (!isNil(pageNumber)) {
            setPerPage(elementsPerPage);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [elementsPerPage]);

    const handlePageChange = (e, value) => {
        setSelectedPage(value - 1);
        handleChangePage({ page: value - 1, size: perPage });
    };

    const handlePerPageChange = (e) => {
        const newPerPage = e.target.value;
        if (newPerPage > perPage) {
            setPerPage(newPerPage);
            setSelectedPage(0);
            handleChangeRowsPerPage({ page: 0, size: newPerPage });
        } else {
            setPerPage(newPerPage);
            handleChangeRowsPerPage({ page: selectedPage, size: newPerPage });
        }
    };
    return (
        <TableRow>
            <TableBodyCell
                rowSpan={headKeys.length}
                colSpan={headKeys.length}
                align={'right'}
            >
                <Grid container justify={'flex-end'}>
                    <Grid item>
                        <Select
                            value={perPage}
                            disableUnderline
                            onChange={handlePerPageChange}
                        >
                            {[5, 10, 15, 25].map((key) => (
                                <MenuItem key={key} value={key}>
                                    {key}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item>
                        <Pagination
                            count={totalPages}
                            defaultPage={0}
                            page={isEmpty(rows) ? 1 : selectedPage + 1}
                            siblingCount={0}
                            boundaryCount={1}
                            style={{ width: 'fit-content' }}
                            onChange={handlePageChange}
                        />
                    </Grid>
                </Grid>
            </TableBodyCell>
        </TableRow>
    );
};
export default TablePaginator;
/*
<TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={headKeys.length}
                count={totalElements}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                // ActionsComponent={TablePaginationActions}
            />
 */
