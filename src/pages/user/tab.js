// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import {Tab, Box} from '@mui/material'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import Icon from 'src/@core/components/icon'
const TabsNav = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <TabList onChange={handleChange} aria-label='nav tabs example' sx={{ marginBottom: '15px' }}>
        <Tab value='1' component='a' label='Profile' onClick={e => e.preventDefault()} />
        <Tab value='2' component='a' label='Contact' onClick={e => e.preventDefault()} />
      </TabList>
      <TabPanel value='1'>
        <Box
          sx={{
            display: 'flex',
            '&:not(:last-of-type)': { mb: 4 },
            '& svg': { color: 'text.secondary' }
          }}
        >
          <Box sx={{ display: 'flex', mr: 2 }}>
            <Icon icon='mdi:user' />
          </Box>
          <Box sx={{ columnGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Full Name:</Typography>
            <Typography sx={{ color: 'text.secondary' }}>John Doe</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            '&:not(:last-of-type)': { mb: 4 },
            '& svg': { color: 'text.secondary' }
          }}
        >
          <Box sx={{ display: 'flex', mr: 2 }}>
            <Icon icon='material-symbols:check' />
          </Box>
          <Box sx={{ columnGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Status:</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Active</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            '&:not(:last-of-type)': { mb: 4 },
            '& svg': { color: 'text.secondary' }
          }}
        >
          <Box sx={{ display: 'flex', mr: 2 }}>
            <Icon icon='material-symbols-light:star-outline' />
          </Box>
          <Box sx={{ columnGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Role:</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Student</Typography>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value='2'>
        <Box
          sx={{
            display: 'flex',
            '&:not(:last-of-type)': { mb: 4 },
            '& svg': { color: 'text.secondary' }
          }}
        >
          <Box sx={{ display: 'flex', mr: 2 }}>
            <Icon icon='material-symbols:mail-outline' />
          </Box>
          <Box sx={{ columnGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Mail:</Typography>
            <Typography sx={{ color: 'text.secondary' }}>student@gmail.com</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            '&:not(:last-of-type)': { mb: 4 },
            '& svg': { color: 'text.secondary' }
          }}
        >
          <Box sx={{ display: 'flex', mr: 2 }}>
            <Icon icon='ic:baseline-phone' />
          </Box>
          <Box sx={{ columnGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Phone:</Typography>
            <Typography sx={{ color: 'text.secondary' }}>9766885356</Typography>
          </Box>
        </Box>
      </TabPanel>
    </TabContext>
  )
}

export default TabsNav
