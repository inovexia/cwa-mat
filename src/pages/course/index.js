import React, { useEffect, useState, useRef } from 'react'
// ** MUI Imports
import Grid from '@mui/material/Grid'
import Breadcrumb from '../../../src/global-component/breadcrumb'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { DataGrid } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import CustomAvatar from 'src/@core/components/mui/avatar'
import Icon from 'src/@core/components/icon'
import CustomChip from 'src/@core/components/mui/chip'
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
// ** API
import CourseApi from 'src/api/Course'
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
    field: 'guid',
    minWidth: 200,
    headerName: 'Course Name',
    renderCell: ({ row }) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderUserAvatar(row)} */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>
              <h3>{row.title}</h3>
            </Typography>
            <Typography variant='caption' sx={{ lineHeight: 1.6667 }}>
              {row.guid}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.25,
    minWidth: 200,
    field: 'title',
    headerName: 'Category',
    renderCell: ({ row }) => (
      <a href={`/`} target='_blank' rel='noopener noreferrer'>
        <Typography variant='body2'>
          <h4>Category</h4>
        </Typography>
      </a>
    )
  },
  {
    flex: 0.25,
    minWidth: 180,
    field: 'updated_by',
    headerName: 'Statistics',
    renderCell: ({ row }) => (
      <Box>
        {/* {roleObj[row.role].icon} */}
        <a href={`/`} target='_blank' rel='noopener noreferrer'>
          <Typography variant='body2'>
            <h4>Subjects : 3</h4>
          </Typography>
        </a>
        <a href={`/`} target='_blank' rel='noopener noreferrer'>
          <Typography variant='body2'>
            <h4>Tests : 10</h4>
          </Typography>
        </a>
        <a href={`/`} target='_blank' rel='noopener noreferrer'>
          <Typography variant='body2'>
            <h4>Online Class : 5</h4>
          </Typography>
        </a>
        <a href={`/`} target='_blank' rel='noopener noreferrer'>
          <Typography variant='body2'>
            <h4>Entollement : 20</h4>
          </Typography>
        </a>
      </Box>
    )
  },
  {
    flex: 0.25,
    minWidth: 110,
    field: 'status',
    headerName: 'Status',
    renderCell: ({ row }) => (
      <>
        {/* <CustomChip
          skin='light'
          size='small'
          label={row.status}
          // color={statusObj[row.status].color}
          sx={{ textTransform: 'capitalize', '& .MuiChip-label': { px: 2.5, lineHeight: 1.385 } }}
        /> */}
        <FormGroup row>
          <FormControlLabel control={<Switch />} label='Unpublish' />
        </FormGroup>
      </>
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

const Course = () => {
  const [allCourses, setAllCourses] = useState([])
  const [status, setStatus] = useState([])
  console.log(allCourses)
  // view all listing Using API
  const getCourses = useRef(async () => {
    const res = await CourseApi.getAllCourses()
    setAllCourses(res.payload.data)
  })
  useEffect(() => {
    getCourses.current()
  }, [])
  // status change Using API
  // const StatusChange = useRef(async () => {
  //   const res = await CourseApi.getStatusChange()
  //   setStatus(res.payload)
  // })
  // useEffect(() => {
  //   StatusChange.current()
  // }, [])

  return (
    <Grid container spacing={6}>
      <Grid container item xs={12} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Breadcrumb />
        </Box>
        <Box>
          <Button component={Link} href={`/course/createcourse`} variant='contained'>
            Create Course
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} spacing={2}>
        <Card>
          <CardContent>
            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Grid item xs={12} sm={6}>
                <h2 style={{ margin: 0 }}>Course you are taking</h2>
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label='Search by title and description'
                  placeholder='Search by title'
                  value='search'
                  // onChange={e => setSearchTitle(e.target.value)}
                  sx={{ width: '100%' }}
                />
              </Grid>
            </Grid>
          </CardContent>
          <DataGrid
            autoHeight
            hideFooter
            rows={allCourses}
            columns={columns}
            getRowId={row => row.guid}
            getRowHeight={() => 'auto'}
            // initialState={{
            //   pagination: {
            //     paginationModel: {
            //       pageSize: 5
            //     }
            //   }
            // }}
            // pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Course
