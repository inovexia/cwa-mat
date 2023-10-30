// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import EcommerceTable from '../../views/ecommerce/EcommerceTable'
import Icon from 'src/@core/components/icon'
import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'
import CrmTable from '../../views/crm/CrmTable'
const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Kick start your project 🚀'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>All the best for your new project.</Typography>
            <Typography>
              Please make sure to read our Template Documentation to understand where to go from here and how to use our
              template.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <CardStatisticsHorizontal
          stats='8,458'
          trend='negative'
          trendNumber='8.1%'
          title='Inovexia Software'
          icon={<Icon icon='mdi:account-outline' />}
        />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='ACL and JWT 🔒'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              Access Control (ACL) and Authentication (JWT) are the two main security features of our template and are
              implemented in the starter-kit as well.
            </Typography>
            <Typography>Please read our Authentication and ACL Documentations to get more out of them.</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sx={{ order: 3 }}>
        {/* <EcommerceTable /> */}
      </Grid>
      <Grid item xs={12}>
        <CrmTable />
      </Grid>
    </Grid>
  )
}

export default Home
