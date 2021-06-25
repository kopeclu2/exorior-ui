import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { useStyles } from './styles';

const TableHeadComponent = ({ keys }) => {
    const classes = useStyles();
    return (
        <TableHead>
            <TableRow>
                {keys.map((key) => (
                    <TableCell className={classes.headText} key={key}>
                        {key}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};
export default TableHeadComponent;
