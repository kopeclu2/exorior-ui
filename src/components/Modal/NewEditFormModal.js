import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Grid from '@material-ui/core/Grid'
import Typography from '../Typography'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { useStyles } from './styles'
import { Box } from '@material-ui/core'

const NewEditFormModal = ({
  isOpen,
  handleClose,
  children,
  title,
  maxWidth
}) => {
  const classes = useStyles()

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth={maxWidth} fullWidth>
      <DialogContent>
        <Box mb={3}>
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
        </Box>
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default NewEditFormModal
