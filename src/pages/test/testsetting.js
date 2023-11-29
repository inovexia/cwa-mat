import React, { useState } from 'react'
// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import serialize from 'serialize-javascript'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
// ** API
import UserApi from 'src/api/User'
const TestSettings = () => {
  

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} spacing={2}>
        <Card>
          <CardHeader title='Test Setting' />
          <CardContent>
            <form>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth required label='Marks Per Question' name='Marks Per Question' />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label='Number of attempts' name='Number of attempts' />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    label='Test Duration(in minutes)'
                    placeholder='Last Name'
                    name='Last Name'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth required label='Negative Marking' name='Negative Marking' />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField fullWidth required label='Passing Marks' name='Passing Marks' />
                </Grid>
                <Grid item xs={12}>
                  <FormControl>
                    <FormLabel id='demo-radio-buttons-group-label'>Show Timer</FormLabel>
                    <RadioGroup
                      aria-labelledby='demo-radio-buttons-group-label'
                      defaultValue='Yes'
                      name='radio-buttons-group'
                    >
                      <FormControlLabel value='Yes' control={<Radio />} label='Yes' />
                      <FormControlLabel value='No' control={<Radio />} label='No' />
                    </RadioGroup>
                  </FormControl>
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

export default TestSettings
