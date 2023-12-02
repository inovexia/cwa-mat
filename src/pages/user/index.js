import React, { useEffect, useState, useRef } from 'react'

// ** MUI Imports
import {
  Grid,
  Alert,
  Menu,
  Card,
  CardContent,
  Button,
  Box,
  Link,
  Typography,
  Table,
  Checkbox,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

// ** API
import UserApi from 'src/api/User'

// ** Global Imports
import Icon from 'src/@core/components/icon'
import Toolbar from 'src/global-component/toolbar'
import DeleteUser from 'src/global-component/user/deleteuser'
import SwitchField from 'src/global-component/formelement/Switch'

// ** Style

const User = () => {
  const [checkedIds, setCheckedIds] = useState([])
  const [loader, setLoader] = useState(true)
  const [openModal, setOpenModal] = useState(false)
  const [guidToDelete, setGuidToDelete] = useState('')
  const [allUsers, setAllUsers] = useState([])

  const getUsers = useRef(async () => {
    const res = await UserApi.getAllUsers()
    if (res.success === true) {
      setLoader(false)
      setAllUsers(res.payload.data)
    }
  })

  useEffect(() => {
    getUsers.current()
  }, [])

  const handleCheckboxChange = userId => {
    const isChecked = checkedIds.includes(userId)
    if (isChecked) {
      setCheckedIds(checkedIds.filter(id => id !== userId))
    } else {
      setCheckedIds([...checkedIds, userId])
    }
  }

  const handleBulkCheckboxChange = () => {
    if (checkedIds.length === allUsers.length) {
      setCheckedIds([])
    } else {
      setCheckedIds(allUsers.map(user => user.guid))
    }
  }

  const handleClickOpen = guid => {
    setGuidToDelete(guid)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleUserDeleted = async () => {
    // Fetch updated user list after deletion
    const updatedUsers = await UserApi.getAllUsers()
    if (updatedUsers.success === true) {
      setAllUsers(updatedUsers.payload.data)
    }
    // Close the modal
    setOpenModal(false)
  }
  const handleUserSearch = async () => {
    try {
      // Fetch updated user list after search
      const searchData = { search: searchTerm } // Replace searchTerm with the actual search term from your state or form input

      const updatedUsers = await UserApi.filterUsers(searchData)

      if (updatedUsers.success === true) {
        setAllUsers(updatedUsers.payload.data)
      }
    } catch (error) {
      console.error(error)
    }
  }
  console.log(allUsers)
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Toolbar onUserSearch={handleUserSearch} />
      </Grid>
      {loader ? (
        <Box
          className='loader'
          sx={{
            width: '100%',
            textAlign: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            right: '50%',
            transform: 'translate(-50%,-50%)'
          }}
        >
          <CircularProgress disableShrink sx={{ my: 5 }} />
        </Box>
      ) : (
        <Grid item xs={12}>
          <Card>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Checkbox
                        checked={checkedIds.length === allUsers.length}
                        indeterminate={checkedIds.length > 0 && checkedIds.length < allUsers.length}
                        onChange={handleBulkCheckboxChange}
                      />
                    </TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>User Email</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allUsers && allUsers.length !== 0
                    ? allUsers.map((user, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Checkbox
                              checked={checkedIds.includes(user.guid)}
                              onChange={() => handleCheckboxChange(user.guid)}
                            />
                          </TableCell>
                          <TableCell>
                            <Typography variant='body2' component='h3'>
                              {user.first_name} {user.last_name}
                            </Typography>
                            <Typography variant='body2' component='h5'>
                              {user.guid}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant='body2' component='h4'>
                              {user.email}
                            </Typography>
                            <Typography variant='body2' component='h5'>
                              {user.mobile}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant='body2' component='h4' style={{ textTransform: 'uppercase' }}>
                              {user.role}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <SwitchField id={user.guid} status={user.status} />
                          </TableCell>
                          <TableCell>
                            <Grid container spacing={2} alignItems='center'>
                              <Grid item>
                                <a href={`/user/edit?id=${user.guid}`} className='edit-user' style={{ mr: 5 }}>
                                  <Icon icon='mdi:edit' />
                                </a>
                              </Grid>
                              <Grid item>
                                {/* <DeleteUser /> */}
                                <Icon
                                  icon='mdi:delete'
                                  onClick={() => handleClickOpen(user.guid)}
                                  sx={{ boxShadow: '0' }}
                                />
                              </Grid>
                            </Grid>
                          </TableCell>
                        </TableRow>
                      ))
                    : 'User not found!'}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
          <Card>
            <DeleteUser
              mdOpen={openModal}
              handleClose={handleCloseModal}
              guidToDelete={guidToDelete}
              onUserDeleted={handleUserDeleted}
            />
          </Card>
        </Grid>
      )}
    </Grid>
  )
}

export default User
