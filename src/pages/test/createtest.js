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
import ReactDraftWysiwyg from 'src/@core/components/react-draft-wysiwyg'
const CreateTest = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} spacing={2}>
        <Card>
          <CardHeader title='Create Test' />
          <CardContent>
            <form>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth required label='Title' name='Title' />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField select label='Type' fullWidth>
                    <MenuItem value={10}>Evaluated</MenuItem>
                    <MenuItem value={20}>Practice</MenuItem>
                    <MenuItem value={30}>Quiz</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label='Start Date'
                    type='date' // Set the type to "date" for a date picker
                    InputLabelProps={{
                      shrink: true
                    }}
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label='End Date'
                    type='date' // Set the type to "date" for a date picker
                    InputLabelProps={{
                      shrink: true
                    }}
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <InputLabel htmlFor='' style={{ color: 'black', marginBottom: '10px' }}>
                    Description
                  </InputLabel>
                  <ReactDraftWysiwyg />
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      gap: 5,
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                    }}
                  >
                    <Button type='submit' variant='outlined' size='large'>
                      Cancel
                    </Button>
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

export default CreateTest
