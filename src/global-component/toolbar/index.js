import { useEffect, useState, useCallback } from 'react'
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
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'

// ** Custom Table Components Imports
import TableHeader from 'src/global-component/toolbar/TableHeader'
import AddUserDrawer from 'src/global-component/toolbar/AddUserDrawer'
const Toolbar = () => {
    const [value, setValue] = useState('')
    const [addUserOpen, setAddUserOpen] = useState(false)
    const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)
    const handleFilter = useCallback(val => {
      setValue(val)
    }, [])
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
        <Box>
          <TextField select label='Select' size='small'>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </TextField>
        </Box>
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
          <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddUserDrawer} />
        </Box>
        <AddUserDrawer open={addUserOpen} toggle={toggleAddUserDrawer} />
      </Grid>
    </Grid>
  )
}

export default Toolbar