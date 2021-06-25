import React from 'react';
import { useStyles } from './styles';
import { TextField } from '@material-ui/core';
import { isNil } from 'ramda';
import FormFieldPadding from '../FormFieldPadding';

const DatePicker = ({
    label,
    value,
    defaultValue,
    onChange,
    form,
    field,
    formField,
    ...other
}) => {
    const classes = useStyles();
    const error =
        !isNil(form) &&
        !isNil(form.errors) &&
        !isNil(field.name) &&
        form.errors[field.name];

    const formikField = (
        <TextField
            {...other}
            {...field}
            variant={'outlined'}
            id="date"
            error={
                !isNil(form) &&
                !isNil(form.errors) &&
                !isNil(field.name) &&
                form.errors[field.name]
            }
            helperText={error}
            label={label}
            type="date"
            onChange={({ target: { value } }) => {
                if (typeof onChange === 'function') {
                    onChange(value);
                }
                form.setFieldValue(field.name, value);
            }}
            defaultValue={defaultValue}
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
        />
    );

    const InputBase = (
        <TextField
            {...other}
            {...field}
            variant={'outlined'}
            id="date"
            label={label}
            type="date"
            value={value}
            defaultValue={defaultValue}
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
            onChange={onChange}
        />
    );

    if (formField && !isNil(field)) {
        return <FormFieldPadding>{formikField}</FormFieldPadding>;
    }
    if (!isNil(field)) {
        return formikField;
    }
    if (formField) {
        return <FormFieldPadding>{InputBase}</FormFieldPadding>;
    }
    return InputBase;
};
export default DatePicker;
