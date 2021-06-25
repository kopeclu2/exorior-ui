import { FormControlLabel, Switch } from '@material-ui/core'
import React from 'react'

const SwitchComponent = ({
  onChange,
  label,
  checked,
  field,
  form,
  ...props
}) => {
  if (field) {
    return (
      <FormControlLabel
        style={{ width: '100%' }}
        control={
          <Switch
            {...props}
            checked={field.value}
            color='primary'
            onChange={(e) => {
              form.setFieldValue(field.name, !field.value)
              form.setFieldTouched(field.name, true)
            }}
          />
        }
        label={label}
      />
    )
  }
  return (
    <Switch color='primary' {...props} onChange={onChange} checked={checked} />
  )
}

export default SwitchComponent
