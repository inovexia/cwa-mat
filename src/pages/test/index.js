import React, { useEffect, useState, useRef } from 'react'
// ** MUI Imports
import Grid from '@mui/material/Grid'
import Breadcrumb from '../../../src/global-component/breadcrumb'
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
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'

// ** API
import TestApi from 'src/api/Test'
import AllTestAction from 'src/global-component/test/alltestaction'

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
          <Box>
            <a href={`/managecourse`} target='_blank' rel='noopener noreferrer'>
              <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>
                <h3>{row.title}</h3>
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
    minWidth: 150,
    field: 'type',
    headerName: 'Type',
    renderCell: ({ row }) => (
      <a href={`/`} target='_blank' rel='noopener noreferrer'>
        <Typography variant='body2'>
          <h4>{row.type}</h4>
        </Typography>
      </a>
    )
  },
  // {
  //   flex: 0.25,
  //   minWidth: 210,
  //   field: 'created_on',
  //   headerName: 'Created Date',
  //   // renderCell: ({ row }) => <CourseStatics courseGuid={row.guid} />
  //   renderCell: ({ row }) => (
  //     <Typography variant='body2'>
  //       <h4>{row.created_on}</h4>
  //     </Typography>
  //   )
  // },
  {
    flex: 0.25,
    minWidth: 150,
    field: 'updated_by',
    headerName: 'Updated By',
    renderCell: ({ row }) => (
      <Typography variant='body2'>
        <h4>{row.updated_by}</h4>
      </Typography>
    )
  },
  {
    flex: 0.25,
    minWidth: 110,
    field: 'status',
    headerName: 'Publish',
    renderCell: ({ row }) => <SwitchButton courseStatus={row.status} courseGuid={row.guid} />
  },
  {
    flex: 0.25,
    minWidth: 150,
    field: 'Action',
    headerName: 'Action',
    renderCell: ({ row }) => <AllTestAction/>
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

const Test = () => {
  const [allTest, setAllTest] = useState([])
  console.log(allTest)
  // view all listing Using API
  const getCourses = useRef(async () => {
    const res = await TestApi.getAllTest()
    if (res.success === true) {
      setAllTest(res.payload.data)
    }
  })
  useEffect(() => {
    getCourses.current()
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid container item xs={12} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Breadcrumb />
        </Box>
        <Box>
          <Button component={Link} href={`/course/createcourse`} variant='contained'>
            Create Test
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} spacing={2}>
        <Card>
          <CardContent>
            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Grid item xs={12} sm={6}>
                <h2 style={{ margin: 0 }}>All Tests</h2>
              </Grid>
              {/* <Grid item xs={12} sm={3}>
                <FormGroup row>
                  <Switch checked={isChecked} onChange={handleSwitchChange} />
                </FormGroup>
                <p>Number of Courses: {courseListLength}</p>
              </Grid> */}
            </Grid>
          </CardContent>
          <DataGrid
            autoHeight
            hideFooter
            rows={allTest}
            columns={columns}
            getRowId={row => row.guid}
            getRowHeight={() => 'auto'}
            checkboxSelection
            disableRowSelectionOnClick
            // slots={{ toolbar: GridToolbar }}
            // slotProps={{
            //   toolbar: {
            //     showQuickFilter: true,
            //     className: 'custom-toolbar'
            //   }
            // }}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Test
