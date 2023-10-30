// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'

function handleClick(event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}
const breadcrumbData = [
  {
    key: 'course',
    items: [
      { label: 'home', path: '/' },
      { label: 'course', path: '/course' }
    ]
  },
  {
    key: 'test',
    items: [
      { label: 'home', path: '/' },
      { label: 'test', path: '/test' }
    ]
  }
]
const Breadcrumb = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <div role='presentation' onClick={handleClick}>
          <Breadcrumbs aria-label='breadcrumb'>
            <Link underline='hover' color='inherit' href='/'>
              Home
            </Link>
            {/* <Link underline='hover' color='inherit' href='/material-ui/getting-started/installation/'></Link> */}
            <Typography color='text.primary'>Course</Typography>
          </Breadcrumbs>
        </div>
      </Grid>
    </Grid>
  )
}

export default Breadcrumb
