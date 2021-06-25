import React from 'react';
import { TextField } from '@material-ui/core';
import { useStyles } from './styles';
import { isNil } from 'ramda';
import FormFieldPadding from '../FormFieldPadding';

const TimePicker = ({ form, field, formField, ...other }) => {
    const classes = useStyles();
    const error =
        !isNil(form) &&
        !isNil(form.errors) &&
        !isNil(field.name) &&
        form.errors[field.name];

    const InputBase = (
        <TextField
            type="time"
            variant={'outlined'}
            {...other}
            {...field}
            error={error}
            helperText={error}
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{
                step: 300, // 5 min
            }}
        />
    );
    if (formField) {
        return <FormFieldPadding>{InputBase}</FormFieldPadding>;
    }
    return InputBase;
};
export default TimePicker;
