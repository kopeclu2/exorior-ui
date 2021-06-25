import React, { useState } from 'react';
import MUITextField from '@material-ui/core/TextField';
import { useStyles } from './styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';

const TextField = ({
    type,
    variant,
    fullWidth,
    select,
    disabled,
    className,
    style,
    shrink,
    placeholder,
    withMinWidth,
    error,
    helperText,
    ...props
}) => {
    const classes = useStyles();

    const [passwordVisibility, setPassVisibility] = useState(false);

    const getTextFieldType = () => {
        if (passwordVisibility) {
            return 'text';
        } else if (type) {
            return type;
        } else {
            return 'text';
        }
    };

    const getStartAdornment = (type) => {
        if (type === 'search') {
            return (
                <InputAdornment position={'start'}>
                    <SearchIcon />
                </InputAdornment>
            );
        }

        if (type === 'phone') {
            return <InputAdornment position={'start'}>+420</InputAdornment>;
        }
    };

    return (
        <MUITextField
            type={getTextFieldType()}
            className={className}
            style={style}
            error={error}
            disabled={disabled}
            variant={variant}
            fullWidth={fullWidth}
            select={select}
            placeholder={placeholder}
            helperText={helperText}
            InputProps={{
                classes: {
                    root: withMinWidth ? classes.root : 0,
                    input: classes.input,
                },
                startAdornment: getStartAdornment(type),
                endAdornment: type === 'password' && (
                    <InputAdornment position={'end'}>
                        <IconButton onClick={() => setPassVisibility(!passwordVisibility)}>
                            {passwordVisibility ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            InputLabelProps={{
                shrink: shrink,
                classes: {
                    formControl: classes.formControl,
                    shrink: classes.shrink,
                },
            }}
            classes={{
                root: classes.textFieldMargin,
            }}
            {...props}
        />
    );
};

TextField.propTypes = {
    /** Type of the input element. It should be a valid HTML5 input type. **/
    type: PropTypes.string,
    /** Button variant **/
    variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
    /** Should be fullWidth **/
    fullWidth: PropTypes.bool,
    /** If the TextField is Select type **/
    select: PropTypes.bool,
    /** Is TextField disabled **/
    disabled: PropTypes.bool,
    /** TextField className **/
    className: PropTypes.string,
    /** TextField style property **/
    style: PropTypes.any,
};

export default TextField;
