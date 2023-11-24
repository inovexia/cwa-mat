import React, { useEffect, useState, useRef } from 'react'
// ** MUI Imports
import Grid from '@mui/material/Grid'
import Breadcrumb from '../../global-component/breadcrumb'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import CustomAvatar from 'src/@core/components/mui/avatar'
import Icon from 'src/@core/components/icon'
import CourseStatics from 'src/global-component/course/CourseStatics'
import SwitchButton from 'src/global-component/course/SwitchButton'
import TextField from '@mui/material/TextField'
import Toolbar from 'src/global-component/toolbar'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
// ** API
import UserApi from 'src/api/User'
import DeleteUser from 'src/global-component/user/deleteuser'


const roleObj = {
  admin: {
    icon: (
      <Box component='span' sx={{ mr: 2, display: 'flex', color: 'error.main' }}>
        <Icon icon='mdi:laptop' />
      </Box>
    )
  },
  author: {
    icon: (
      <Box component='span' sx={{ mr: 2, display: 'flex', color: 'warning.main' }}>
        <Icon icon='mdi:cog' />
      </Box>
    )
  },
  maintainer: {
    icon: (
      <Box component='span' sx={{ mr: 2, display: 'flex', color: 'success.main' }}>
        <Icon icon='mdi:chart-donut' />
      </Box>
    )
  },
  editor: {
    icon: (
      <Box component='span' sx={{ mr: 2, display: 'flex', color: 'info.main' }}>
        <Icon icon='mdi:pencil-outline' />
      </Box>
    )
  },
  subscriber: {
    icon: (
      <Box component='span' sx={{ mr: 2, display: 'flex', color: 'primary.main' }}>
        <Icon icon='mdi:account-outline' />
      </Box>
    )
  }
}

const statusObj = {
  active: { color: 'success' },
  pending: { color: 'warning' },
  inactive: { color: 'secondary' }
}
const columns = [
  {
    flex: 0.25,
    field: 'name',
    minWidth: 100,
    headerName: 'User Name',
    renderCell: ({ row }) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderUserAvatar(row)} */}
          <Box>
            <a href={`/managecourse`} target='_blank' rel='noopener noreferrer'>
              <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>
                <h3>{row.username}</h3>
              </Typography>
            </a>
            <a href={`/managecourse`} target='_blank' rel='noopener noreferrer'>
              <Typography variant='caption' sx={{ lineHeight: 1.6667 }}>
                {row.guid}
              </Typography>
            </a>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.25,
    minWidth: 300,
    field: 'email',
    headerName: 'User Email',
    renderCell: ({ row }) => (
      <Typography variant='body2'>
        <h4>{row.email}</h4>
        <h5>{row.mobile}</h5>
      </Typography>
    )
  },
  {
    flex: 0.25,
    minWidth: 180,
    field: 'role',
    headerName: 'Role',
    renderCell: ({ row }) => (
      <Typography variant='body2'>
        <h4>{row.role}</h4>
      </Typography>
    )
  },
  {
    flex: 0.25,
    minWidth: 110,
    field: 'status',
    headerName: 'Status',
    renderCell: ({ row }) => (
      <Typography variant='body2'>
        {row.status === 0 && <h4 style={{ color: 'red' }}>Inactive</h4>}
      </Typography>
    )
  },
  {
    flex: 0.25,
    minWidth: 180,
    field: 'action',
    headerName: 'Action',
    renderCell: ({ row }) => (
      <Box sx={{ display: 'flex', spacing: '2' }}>
        <a href={`/user/edituser`} variant='contained'>
          <Icon icon='material-symbols-light:edit' />
        </a>
        <DeleteUser />
        {/* <Icon icon='material-symbols:delete-outline' /> */}
      </Box>
    )
  }
]
const renderUserAvatar = row => {
  if (row.avatarSrc) {
    return <CustomAvatar src={row.avatarSrc} sx={{ mr: 3, width: 34, height: 34 }} />
  } else {
    return (
      <CustomAvatar skin='light' sx={{ mr: 3, width: 34, height: 34, fontSize: '.8rem' }}>
        {/* {getInitials(row.name ? row.name : 'John Doe')} */}
      </CustomAvatar>
    )
  }
}

const User = () => {
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






  return (
    <Grid container spacing={6}>
      <Grid item xs={12} spacing={2} style={{ display: 'flex' }}>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            gap: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <TextField
            label='Search'
            variant='outlined'
            fullWidth
            // value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <Icon icon='ic:baseline-search' />
                </IconButton>
              )
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          sx={{
            gap: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end'
          }}
        >
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id='role-filter-label'>Role</InputLabel>
              <Select
                labelId='role-filter-label'
                id='role-filter'
                // value={filterRole}
                onChange={e => setFilterRole(e.target.value)}
                label='Filter By Role'
              >
                <MenuItem value={10}>Publish</MenuItem>
                <MenuItem value={30}>Delete</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id='status-filter-label'>Status</InputLabel>
              <Select
                labelId='status-filter-label'
                id='status-filter'
                // value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                label='Filter By Status'
              >
                {/* {Object.entries(statusOptions).map(([value, label]) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))} */}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Action</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={age}
                label='Action'
                // onChange={handleChange}
              >
                <MenuItem value={10}>Publish</MenuItem>
                <MenuItem value={30}>Delete</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Button variant='contained' color='primary' sx={{ padding: '15px 40px' }}>
              Save
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} spacing={2}>
        <Card>
          <DataGrid
            autoHeight
            hideFooter
            rows={allUsers}
            columns={columns}
            getRowId={row => row.guid}
            getRowHeight={() => 'auto'}
            // sx={{ marginTop: '20px' }}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default User
