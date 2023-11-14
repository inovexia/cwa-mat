import { useEffect, useState } from 'react'
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Toolbar from 'src/global-component/toolbar'
import { height } from '@mui/system'
import RightSidebar from 'src/global-component/toolbar/rsidebar'
const SingleCourse = () => {

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <RightSidebar />
      </Grid>
    </Grid>
  )
}

export default SingleCourse
