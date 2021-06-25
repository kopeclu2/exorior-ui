import React from 'react';
import TextField from '../../TextField';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';

const FieldSelect = ({ field, form: { touched, errors }, onChange, fullWidth, ...props }) => {
    return (
        <FormControl fullWidth={fullWidth}>
            <TextField
                select
                variant={'outlined'}
                onChange={onChange}
                fullWidth
                {...field}
                {...props}
            />
            {touched[field.name] && errors[field.name] && (
                <div style={{ color: 'red' }}>{errors[field.name]}</div>
            )}
        </FormControl>
    );
};

FieldSelect.propTypes = {
    /** Formik field property **/
    field: PropTypes.any,
    /** Formik form property **/
    form: PropTypes.any,
    /** onChange function **/
    onChange: PropTypes.func,
    /** Should be fullWidth **/
    fullWidth: PropTypes.bool,
};

export default FieldSelect;
