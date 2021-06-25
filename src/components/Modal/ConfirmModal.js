import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { Box } from '@material-ui/core'
import Typography from '../Typography'
import Button from '../Button'
import { useStyles } from './styles'

const ConfirmModal = ({
  isOpen,
  handleClose,
  handleConfirm,
  title,
  children,
  cancelButtonLabel,
  confirmButtonLabel,
  maxWidth
}) => {
  const classes = useStyles()

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth={maxWidth} fullWidth>
      <DialogContent>
        <Grid container justify='space-between' alignItems='center'>
          <Grid item xs={10}>
            <Typography variant='h2' color='primary'>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Grid container justify='flex-end'>
              <IconButton onClick={handleClose} className={classes.closeIcon}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Box pt={2}>{children}</Box>
        <Box pt={3}>
          <Grid container justify='flex-end'>
            <Box mr={3}>
              <Button onClick={handleClose} color='primary' variant='outlined'>
                {cancelButtonLabel}
              </Button>
            </Box>
            <Button
              variant='contained'
              color='primary'
              onClick={() => {
                handleConfirm()
                handleClose()
              }}
            >
              {confirmButtonLabel}
            </Button>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default ConfirmModal
