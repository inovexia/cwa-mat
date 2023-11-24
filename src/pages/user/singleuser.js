// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import Image from 'next/image';
// ** Third Party Imports
import axios from 'axios'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const SingleUser = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <Image
            src="/images/cover_image.jpg" // Path relative to the public folder
            alt="Description of the image"
            width={300} // Set the width of the image
            height={200} // Set the height of the image
          />
          <CardContent
            sx={{
              pt: 0,
              mt: -8,
              display: 'flex',
              alignItems: 'flex-end',
              flexWrap: { xs: 'wrap', md: 'nowrap' },
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}
          >
            {/* <ProfilePicture src={data.profileImg} alt='profile-picture' /> */}
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                ml: { xs: 0, md: 6 },
                alignItems: 'flex-end',
                flexWrap: ['wrap', 'nowrap'],
                justifyContent: ['center', 'space-between']
              }}
            >
              <Box sx={{ mb: [6, 0], display: 'flex', flexDirection: 'column', alignItems: ['center', 'flex-start'] }}>
                <Typography variant='h5' sx={{ mb: 4, fontSize: '1.375rem' }}>
                  Full Name
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: ['center', 'flex-start']
                  }}
                >
                  <Box
                    sx={{ mr: 4, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}
                  >
                    {/* <Icon icon={designationIcon} /> */}
                    <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>Student</Typography>
                  </Box>
                  <Box
                    sx={{ mr: 4, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}
                  >
                    {/* <Icon icon='mdi:map-marker-outline' /> */}
                    <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>India</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}>
                    {/* <Icon icon='mdi:calendar-blank-outline' /> */}
                    <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>Joined 20 Nov, 2023</Typography>
                  </Box>
                </Box>
              </Box>
              {/* <Button variant='contained' startIcon={<Icon icon='mdi:account-check-outline' fontSize={20} />}>
            Connected
          </Button> */}
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title='About' />
          <CardContent>
            <Box
              sx={{
                gap: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                '&:not(:last-of-type)': { mb: 4 },
                color: theme => theme.palette.primary.main
              }}
            >
              <div>
                <Typography variant='body1'>All Tests</Typography>
              </div>
              <div>
                <Icon icon='gg:check-o' />
              </div>
            </Box>
            <Box
              sx={{
                gap: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                '&:not(:last-of-type)': { mb: 4 },
                color: theme => theme.palette.primary.main
              }}
            >
              <div>
                <Typography variant='body1'>Add Test</Typography>
              </div>
              <div>
                <Icon icon='icons8:plus' />
              </div>
            </Box>
            <Box
              sx={{
                gap: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                '&:not(:last-of-type)': { mb: 4 },
                color: theme => theme.palette.primary.main
              }}
            >
              <div>
                <Typography variant='body1'>Delete Test</Typography>
              </div>
              <div>
                <Icon icon='mdi:delete-outline' />
              </div>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  ) 
}

export default SingleUser
