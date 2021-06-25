import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import TableBodyCell from './TableBodyCell';
import { IconButton } from '@material-ui/core';

const UpdateRowCell = ({ onClick }) => (
    <TableBodyCell>
        <IconButton onClick={onClick}>
            <CreateIcon color={'primary'} />
        </IconButton>
    </TableBodyCell>
);
export default UpdateRowCell;
