import React from 'react';
import Typography from '../Typography';
import { Grid } from '@material-ui/core';
import { useStyles } from './styles';

const PageWrapper = ({ children, heading, rightBar, headingBar, headingVariant }) => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Grid
                container
                justify="space-between"
                alignItems="center"
                className={classes.paddingHeading}
            >
                <Grid item>
                    {heading && (
                        <Typography component={'span'} variant={headingVariant}>
                            {heading}
                        </Typography>
                    )}
                    {headingBar && headingBar}
                </Grid>
                <Grid item>{rightBar}</Grid>
            </Grid>

            <div>{children}</div>
        </div>
    );
};

export default PageWrapper;
