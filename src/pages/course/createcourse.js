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
const Createcourse = () => {
  return (
    <Grid container spacing={6}>
      <Grid container item xs={12} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box
          sx={{
            display: { xs: 'block' }
          }}
        >
          <Breadcrumb />
        </Box>
        <Box>
          <Button component={Link} href={`/course/create`} variant='contained'>
            Create Subject
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} spacing={2}>
        <Card>
          <CardHeader title='Create Course' />
          <CardContent>
            <form>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <TextField fullWidth label='Title' placeholder='Course Name' name='title' />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel htmlFor='' style={{ color: 'black', marginBottom: '10px' }}>
                    Description
                  </InputLabel>
                  <ReactDraftWysiwyg />
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

export default Createcourse
