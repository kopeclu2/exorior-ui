import React from 'react';
import DividerLight from '../../svg/divider_light.svg';
import { Grid } from '@material-ui/core';
import { useStyles } from './styles';

const Divider = () => {
    const classes = useStyles();
    return (
        <Grid item className={classes.formFieldPaddingSmaller}>
            <img src={DividerLight} alt={'divider'} />
        </Grid>
    );
};
export default Divider;
