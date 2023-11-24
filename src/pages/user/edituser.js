import * as React from 'react'
// ** MUI Imports
import Grid from '@mui/material/Grid'
import Breadcrumb from '../../../src/global-component/breadcrumb'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import ReactDraftWysiwyg from 'src/@core/components/react-draft-wysiwyg'
import FileUploaderSingle from 'src/global-component/file-upload'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
const EditUser = () => {
  const [role, setRole] = React.useState('')

  const handleChange = event => {
    setRole(event.target.value)
  }
  return (
    <Grid container spacing={6}>
      <Grid container item xs={12} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box
          sx={{
            display: { xs: 'block' }
          }}
        >
          {/* <Breadcrumb /> */}
        </Box>
        <Box>
          <Button component={Link} href={`/user/createuser`} variant='contained'>
            Create User
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} spacing={2}>
        <Card>
          <CardHeader title='Create User' />
          <CardContent>
            <form>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label='Name' placeholder='User Name' name='Name' />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label='Email' placeholder='User Email' name='Email' />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label='Mobile No' placeholder='Mobile Number' name='Mobile' />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>Role</InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={role}
                      label='Role'
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Admin</MenuItem>
                      <MenuItem value={20}>Student</MenuItem>
                      <MenuItem value={30}>Teacher</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <InputLabel htmlFor='' style={{ color: 'black', marginBottom: '10px' }}>
                    Upload Images
                  </InputLabel>
                  <FileUploaderSingle />
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      gap: 5,
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Button type='submit' variant='contained' size='large'>
                      Save
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default EditUser
