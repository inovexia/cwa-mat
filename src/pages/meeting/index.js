import React, { useEffect, useState, useRef } from 'react'

// ** MUI Imports
import {
  Grid,
  Menu,
  Card,
  CardContent,
  Button,
  Box,
  Link,
  Typography,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  Checkbox,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material'

// ** API
import UserApi from 'src/api/User'

// ** Global Imports
import Icon from 'src/@core/components/icon'
import Toolbar from 'src/global-component/toolbar'
import DeleteUser from 'src/global-component/user/deleteuser'
import SwitchField from 'src/global-component/formelement/Switch'
import TableBasic from './table'
// ** Style

const AllMeeting = () => {
  // for action dropdown
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const [allUsers, setAllUsers] = useState([])
  console.log(allUsers)

  // view all listing Using API
  const getUsers = useRef(async () => {
    const res = await UserApi.getAllUsers()
    if (res.success === true) {
      setAllUsers(res.payload.data)
    }
  })
  useEffect(() => {
    getUsers.current()
  }, [])
  console.log(allUsers)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Toolbar />
      </Grid>
      <Grid item xs={12}>
        {/* <Card>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>User Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allUsers.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <Typography variant='body2'>
                        <h3>
                          {user.first_name} {user.last_name}
                        </h3>
                      </Typography>
                      <Typography variant='body2'>
                        <h5>{user.guid}</h5>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='body2'>
                        <h4>{user.email}</h4>
                      </Typography>
                      <Typography variant='body2'>
                        <h5>{user.mobile}</h5>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='body2'>
                        <h4 style={{ textTransform: 'uppercase' }}>{user.role}</h4>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <SwitchField />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex' }}>
                        <a href={`/user/edituser`} variant='contained'>
                          <Icon icon='material-symbols-light:edit' />
                        </a>
                        <DeleteUser />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card> */}
        <TableBasic/>
      </Grid>
    </Grid>
  )
}

export default AllMeeting
