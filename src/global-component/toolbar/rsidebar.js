import * as React from 'react'
import { useEffect, useState } from 'react'
// ** MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Icon from 'src/@core/components/icon'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Switch from '@mui/material/Switch'
import Paper from '@mui/material/Paper'
import Fade from '@mui/material/Fade'
import FormControlLabel from '@mui/material/FormControlLabel'
// import Drawer  from './drawerright'
const icon = (
  <Paper sx={{ m: 1, width: '100vh', height: '100vh' }} elevation={4}>
    {/* <svg>
      <Box
        component='polygon'
        points='0,100 50,00, 100,100'
        sx={{
          fill: theme => theme.palette.common.white,
          stroke: theme => theme.palette.divider,
          strokeWidth: 1
        }}
      />
    </svg> */}
  </Paper>
)
const RightSidebar = () => {
   const [checked, setChecked] = useState(false)
   const [anchorEl, setAnchorEl] = useState(null)

   const handleChange = () => {
     setChecked(!checked)
   }

   const handleMenuOpen = event => {
     setAnchorEl(event.currentTarget)
   }

   const handleMenuClose = () => {
     setAnchorEl(null)
   }
  return (
    <Grid container spacing={6}>
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
            <InputLabel id='demo-simple-select-label'>Sort By</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              // value={age}
              label='Sort By'
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Filter By</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              // value={age}
              label='Filter By'
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
              <MenuItem value={20}>Edit</MenuItem>
              <MenuItem value={30}>Delete</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Button variant='contained' color='primary' sx={{ padding: '15px 40px' }}>
            Save
          </Button>
        </Box>
        <Box>
          <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label='Show' />
        </Box>
        {/* {isSidebarOpen && <RightSidebar />} */}
      </Grid>
      <Grid container xs={12}>
      
        <Box>
          <Box>
            <Fade in={checked}>{icon}</Fade>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default RightSidebar
