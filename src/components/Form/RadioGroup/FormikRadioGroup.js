import React from 'react'

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography
} from '@material-ui/core'
import FormFieldPadding from '../FormFieldPadding'

const renderOptions = (options) => {
  return options.map(({ label, value }) => (
    <FormControlLabel
      key={value}
      value={value}
      control={<Radio color='primary' />}
      label={label}
    />
  ))
}

const FormikRadioGroup = ({
  field,
  form: { touched, errors },
  name,
  options,
  children,
  color,
  ...props
}) => {
  const fieldName = name || field.name

  return (
    <FormFieldPadding>
      <RadioGroup
        {...field}
        {...props}
        name={fieldName}
        aria-label='position'
        defaultValue='top'
      >
        {/* Here you either map over the props and render radios from them,
         or just render the children if you're using the function as a child */}
        {options ? renderOptions(options) : children}
      </RadioGroup>

      {touched[fieldName] && errors[fieldName] && (
        <Typography
          component='span'
          style={{ color: 'red', fontFamily: 'sans-serif' }}
        >
          {errors[fieldName]}
        </Typography>
      )}
    </FormFieldPadding>
  )
}

export default FormikRadioGroup
