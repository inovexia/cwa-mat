import { useEffect, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Icon from 'src/@core/components/icon'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { Button, Link } from '@mui/material'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import toast, { Toaster } from 'react-hot-toast'

// ** API
import UserApi from 'src/api/User'

const Toolbar = ({ onUserSearch }) => {
  const [searchInput, setSearchInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchInputChange = event => {
    setSearchTerm(event.target.value)
  }

  const handleSearch = async () => {
    // Call the searchUser function with the search input
    await searchUser({ search: searchInput })
  }

  const handleKeyPress = event => {
    // Check if Enter key is pressed
    if (event.key === 'Enter') {
      handleSearch()
    }
  }
  const searchUser = async data => {
    try {
      const formData = new FormData()

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value)
      })

      const res = await UserApi.filterUsers(formData)

      if (res.success === true) {
        if (onUserSearch) {
          onUserSearch()
        }
      } else {
        toast.error('Failed to create user')
      }
    } catch (error) {
      console.error(error)
      toast.error('An error occurred while creating the user')
    }
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
          size='small'
          fullWidth
          value={searchTerm}
          onChange={handleSearchInputChange}
          onKeyPress={handleKeyPress}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleSearch}>
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
        {/* <Box>
          <TextField select label='Select' size='small'>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </TextField>
        </Box> */}
        <Box>
          <TextField select label='Filter By' size='small'>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </TextField>
        </Box>
        <Box>
          <TextField select label='Action' size='small'>
            <MenuItem value={10}>Publish</MenuItem>
            <MenuItem value={20}>Edit</MenuItem>
            <MenuItem value={30}>Delete</MenuItem>
          </TextField>
        </Box>
        <Box>
          <Button variant='contained' color='primary' component={Link} href='/user/create'>
            Create User
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Toolbar
