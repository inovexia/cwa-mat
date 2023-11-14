// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Icon from 'src/@core/components/icon'
const TitleSubtitle = () => {
  return (
    <Grid container spacing={6}>
      <Grid
        item
        xs={12}
        sx={{
          gap: 2,
          display: 'flex',
          alignItems: 'center',
        
        }}
      >
        <Box>
          <Icon icon='eva:arrow-back-fill' />
        </Box>
        <Box>
          <Typography>Title</Typography>
          <Typography variant='body2'>Subtitle</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default TitleSubtitle
