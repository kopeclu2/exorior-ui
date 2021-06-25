import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import { Box, Paper, TableBody } from '@material-ui/core';
import { useStyles } from './styles';

const TableCustom = ({ tableHeading, children, tablePagination, tableFilter }) => {
    const classes = useStyles();

    return (
        <Paper>
            <Box pl={3} pr={3} className={classes.tableCustom}>
                {tableFilter ? (
                    <>
                        <Box pt={3} pb={3}>
                            {tableFilter}
                        </Box>
                    </>
                ) : null}
                <Table aria-label="TableCustom">
                    <TableHead>{tableHeading}</TableHead>
                    <TableBody>{children}</TableBody>
                    {tablePagination && (
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={99}>{tablePagination}</TableCell>
                            </TableRow>
                        </TableFooter>
                    )}
                </Table>
            </Box>
        </Paper>
    );
};

export default TableCustom;
