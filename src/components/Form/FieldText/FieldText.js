import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '../../TextField';
import PropTypes from 'prop-types';

const FieldText = ({ field, form: { touched, errors }, fullWidth, type, ...props }) => {
    const hasError = () => {
        if (touched[field.name] && errors[field.name]) {
            return true;
        }
    };

    return (
        <FormControl fullWidth={fullWidth}>
            <TextField
                type={type ? type : 'text'}
                helperText={touched[field.name] && errors[field.name] && errors[field.name]}
                error={hasError()}
                variant={'outlined'}
                {...field}
                {...props}
            />
        </FormControl>
    );
};

FieldText.propTypes = {
    /** Formik field property **/
    field: PropTypes.any,
    /** Formik form property **/
    form: PropTypes.any,
    /** Should be fullWidth **/
    fullWidth: PropTypes.bool,
    /** Type of the input element. It should be a valid HTML5 input type. **/
    type: PropTypes.string,
};

export default FieldText;
