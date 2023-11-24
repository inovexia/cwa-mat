import React, { useEffect, useState, useRef } from 'react'
// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Icon from 'src/@core/components/icon'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
// ** API
import UserApi from 'src/api/User'

const DeleteUser = () => {
  const [open, setOpen] = React.useState(false)
  const [isActionSuccess, setIsActionSuccess] = useState(null)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleDeleteUser = async () => {
    
  }
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} spacing={2}>
          <Icon icon='material-symbols:delete-outline' onClick={handleClickOpen} sx={{ boxShadow: '0' }} />
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogTitle id='alert-dialog-title'>{'Delete User'}</DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>Confirm to delete User ?</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant='outlined'>
                Cancel
              </Button>
              <Button onClick={handleDeleteUser} autoFocus variant='contained'>
                Submit
              </Button>
            </DialogActions>
          </Dialog>
      </Grid>
    </Grid>
  )
}

export default DeleteUser
