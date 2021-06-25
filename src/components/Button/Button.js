import React from 'react'
import PropTypes from 'prop-types'
import MUIButton from '@material-ui/core/Button'
import { useStyles } from './styles'

const Button = ({
  variant,
  color,
  onClick,
  fullWidth,
  disableRipple,
  type,
  disabled,
  style,
  id,
  className,
  children
}) => {
  const classes = useStyles()
  return (
    <MUIButton
      id={id}
      className={className}
      style={style}
      disabled={disabled}
      type={type}
      variant={variant}
      color={color || 'primary'}
      onClick={onClick}
      fullWidth={fullWidth}
      disableRipple={disableRipple}
      classes={{
        root: classes.root
      }}
    >
      {children}
    </MUIButton>
  )
}

Button.propTypes = {
  /** Button variant **/
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  /** Button color **/
  color: PropTypes.oneOf(['primary', 'inherit', 'default', 'secondary']),
  /** On button click **/
  onClick: PropTypes.func,
  /** Should be button 100% width **/
  fullWidth: PropTypes.bool,
  /** Should have button disabled ripple effect **/
  disableRipple: PropTypes.bool,
  /** Button type **/
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Is button disabled **/
  disabled: PropTypes.bool,
  /** Button style property **/
  style: PropTypes.any,
  /** Button id **/
  id: PropTypes.string,
  /** Button className **/
  className: PropTypes.string,
  /** Button children **/
  children: PropTypes.node
}

export default Button
