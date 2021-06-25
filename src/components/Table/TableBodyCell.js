import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { useStyles } from './styles';
import { isNil } from 'ramda';

const TableBodyCell = ({
    children,
    row,
    defaultValue,
    valueKey,
    isNameCell,
    isTimeCell,
    ...other
}) => {
    const classes = useStyles();

    if (Array.isArray(valueKey) && valueKey.length > 1) {
        return (
            <TableCell
                component="th"
                scope="row"
                className={classes.tableCell}
                {...other}
            >
                {`${row[valueKey[0]]} ${row[valueKey[1]]}`}
            </TableCell>
        );
    }
    const value = !isNil(defaultValue)
        ? `${defaultValue}`
        : row && row[valueKey];
    return (
        <TableCell
            component="th"
            scope="row"
            className={classes.tableCell}
            {...other}
        >
            {value ? value : children}
        </TableCell>
    );
};
export default TableBodyCell;
