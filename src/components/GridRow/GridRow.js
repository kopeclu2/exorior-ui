import React from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './styles';
import Typography from '../Typography';

const GridRow = ({ leftSide, title, rightSide, children, paddingSmaller }) => {
    const classes = useStyles();
    return (
        <Grid
            container
            direction={'row'}
            justify={'space-between'}
            alignItems={'center'}
            className={
                paddingSmaller
                    ? classes.formFieldPaddingSmaller
                    : classes.formFieldPadding
            }
        >
            <Grid item>
                {title ? <Typography>{title}</Typography> : leftSide}
            </Grid>
            <Grid item>{children}</Grid>
        </Grid>
    );
};
export default GridRow;
