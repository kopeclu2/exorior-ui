import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';
import { useStyles } from '../styles';

const FieldCheckBox = ({ field, form, label, ...props }) => {
    const classes = useStyles();

    return (
        <FormControlLabel
            control={<Checkbox color={'primary'} checked={field.value} {...field} {...props} />}
            label={label}
            classes={{
                root: classes.root,
            }}
        />
    );
};

FieldCheckBox.propTypes = {
    /** Formik field property **/
    field: PropTypes.any,
    /** Formik form property **/
    form: PropTypes.any,
    /** Label for FieldCheckBox **/
    label: PropTypes.string,
};

export default FieldCheckBox;
