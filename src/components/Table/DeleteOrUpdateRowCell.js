import React, { useState } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import TableBodyCell from './TableBodyCell';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import ConfirmModal from '../Modal/ConfirmModal';

const DeleteOrUpdateRowCell = ({
    onDelete,
    onUpdate,
    hideDelete,
    hideUpdate,
    smallIcons,
}) => {
    const [confirmDialog, setOpenConfirmDialog] = useState(false);
    return (
        <TableBodyCell style={{ padding: '0px 5px 0px 5px' }}>
            <ConfirmModal
                isOpen={confirmDialog}
                handleConfirm={onDelete}
                title={'Opravdu odstranit vyjímku ?'}
                handleClose={() => setOpenConfirmDialog(false)}
            />
            <Grid
                container
                alignItems={'center'}
                justify={'flex-end'}
                spacing={smallIcons ? 2 : 0}
            >
                {!hideDelete && (
                    <Grid item>
                        <IconButton
                            onClick={() => setOpenConfirmDialog(true)}
                            size={'small'}
                        >
                            <DeleteIcon
                                color={'error'}
                                fontSize={smallIcons ? 'small' : 'normal'}
                            />
                        </IconButton>
                    </Grid>
                )}
                {!hideUpdate && (
                    <Grid item>
                        <IconButton onClick={onUpdate} size={'small'}>
                            <CreateIcon
                                color={'primary'}
                                fontSize={smallIcons ? 'small' : 'normal'}
                            />
                        </IconButton>
                    </Grid>
                )}
            </Grid>
        </TableBodyCell>
    );
};

export default DeleteOrUpdateRowCell;
