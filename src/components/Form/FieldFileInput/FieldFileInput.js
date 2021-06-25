import React, { useState } from 'react'
import Typography from '../../Typography'
import { useStyles } from './styles'
import { isValidUrl } from '../../../utils'
import { Avatar, IconButton } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel'
import { isEmpty } from 'ramda'

const Preview = ({ url, deleteImage, setBase64Url, base64, disabled }) => {
  const classes = useStyles()

  return (
    <div className={classes.relative}>
      {!disabled && (
        <IconButton
          size='small'
          className={classes.cancelButton}
          onClick={() => {
            deleteImage()
            base64 && setBase64Url('')
          }}
        >
          <CancelIcon color='error' />
        </IconButton>
      )}
      <Avatar
        src={url}
        className={`${classes.avatar} ${disabled ? classes.grayScale : ''}`}
      />
    </div>
  )
}

const FieldFileInput = ({
  title,
  form,
  form: { touched, errors },
  field,
  disabled
}) => {
  const classes = useStyles()
  const [base64Url, setBase64Url] = useState('')

  const deleteImage = () => {
    form.setFieldValue(field.name, '', true)
    form.setFieldTouched(field.name, true)
  }

  const handleFileChange = (e) => {
    e.preventDefault()
    getBase64(e.target.files[0], (base64) => {
      setBase64Url(base64)
      form.setFieldValue(
        field.name,
        base64.replace('data:', '').replace(/^.+,/, ''),
        true
      )
      form.setFieldTouched(field.name, true)
    })
  }

  const getBase64 = (file, cb) => {
    if (Math.round(file.size / 1024) > 2048) {
      // 2MB
      alert('Obrázek je příliš velký')
      return
    }

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      cb(reader.result)
    }
    reader.onerror = function (error) {
      console.log('Error: ', error)
    }
  }

  if (isValidUrl(field.value)) {
    return (
      <Preview
        url={field.value}
        deleteImage={deleteImage}
        disabled={disabled}
      />
    )
  }

  if (!isEmpty(field.value) && !isEmpty(base64Url)) {
    return (
      <Preview
        url={base64Url}
        deleteImage={deleteImage}
        base64
        setBase64Url={setBase64Url}
        disabled={disabled}
      />
    )
  }

  return (
    <>
      <label htmlFor={field.name} className={classes.fileInputLabel}>
        <Typography variant='selectFileText'>{title}</Typography>
      </label>
      {touched[field.name] && errors[field.name] && (
        <div style={{ color: 'red' }}>{errors[field.name]}</div>
      )}
      <input
        onChange={handleFileChange}
        id={field.name}
        className={classes.fileInput}
        type='file'
      />
    </>
  )
}
export default FieldFileInput
