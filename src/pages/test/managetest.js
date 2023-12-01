// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Switch from '@mui/material/Switch'
import Icon from 'src/@core/components/icon'
const ManageTest = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title='Question' />
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
                <Typography variant='body1'>All Question</Typography>
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
                <Typography variant='body1'>Add Question</Typography>
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
                <Typography variant='body1'>Preview Test</Typography>
              </div>
              <div>
                <Icon
                  icon='mdi:delete-outline'
                  sx={{
                    pr: 2
                  }}
                />
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
                <Typography variant='body1'>Import Question</Typography>
              </div>
              <div>
                <Icon
                  icon='mdi:delete-outline'
                  sx={{
                    pr: 2
                  }}
                />
              </div>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title='Setting' />
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
                <Typography variant='body1'>Publish</Typography>
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
                <Typography variant='body1'>Take Test</Typography>
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
                <Typography variant='body1'>Edit Test</Typography>
              </div>
              <div>
                <Icon icon='mdi:delete-outline' />
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
                <Typography variant='body1'>Setting</Typography>
              </div>
              <div>
                <Icon icon='mdi:delete-outline' />
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
                <Typography variant='body1'>Delete</Typography>
              </div>
              <div>
                <Icon icon='mdi:delete-outline' />
              </div>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title='Enrolment' />
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
                <Typography variant='body1'>All Enrolment </Typography>
              </div>
              <div>
                <Icon icon='gg:check-o' />
              </div>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title='Submission' />
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
                <Typography variant='body1'>My Submission Report</Typography>
              </div>
              <div>
                <Icon icon='line-md:switch' />
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
                <Typography variant='body1'>All Submission</Typography>
              </div>
              <div>
                <Icon icon='mdi:pencil-outline' />
              </div>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ManageTest
