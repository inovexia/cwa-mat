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
import FileUploaderSingle from 'src/global-component/formelement/file-upload'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import serialize from 'serialize-javascript'
const CreateUser = () => {
  const [role, setRole] = React.useState('')

  const handleChange = event => {
    setRole(event.target.value)
  }
  const [firstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const handleFirstNameChange = event => {
    const value = event.target.value

    // Validation for minimum 3 characters and maximum 20 characters
    if (value.length >= 3 && value.length <= 20) {
      setFirstName(value)
      setFirstNameError(false) // Reset error when within the valid range
    } else {
      setFirstNameError(true) // Set error when outside the valid range
    }
  }
  const handleLastNameChange = event => {
    const value = event.target.value

    // Validation for minimum 3 characters and maximum 20 characters
    if (value.length >= 3 && value.length <= 20) {
      setLastName(value)
      setLastNameError(false) // Reset error when within the valid range
    } else {
      setLastNameError(true) // Set error when outside the valid range
    }
  }
  const [email, setEmail] = useState({
    value: '',
    touched: false
  })
  const [mobile, setMobile] = useState({
    value: '',
    touched: false
  })

  const isEmailValid = value => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value)
  }

  const handleEmailChange = event => {
    const value = event.target.value
    setEmail({
      value: value,
      touched: true
    })
  }

  const handleMobileChange = event => {
    const value = event.target.value
    // Validation for numeric values only
    if (/^\d*$/.test(value)) {
      setMobile({
        value: value,
        touched: true
      })
    }
  }
  
  const [formData, setFormData] = useState({
    first_name: firstName,
    middle_name: '',
    last_name: '',
    role: 'student',
    status: '',
    mobile: '',
    email: ''
  })
  const handleFormSubmit = async e => {
    e.preventDefault()
    // const formData = new FormData()
    setFormData(Data)
    const Data = serialize(formData)
    console.log(Data)
    
    return
    try {
      // const response = await fetch(`${BASE_URL}/users/add`, requestOptions)
      const res = await UserApi.createUser(Data)
      console.log(res)
      // const result = await response.json()
      // setAlertOpen(true)
      // setEmailError(result.message.email)
      // setMobileError(result.message)
      // if (result.success === true) {
      //   setIsUserCreated(true)
      //   setTimeout(() => {
      //     setAlertOpen(false)
      //     navigate(`/user`)
      //   }, 3000)
      // } else {
      //   setIsUserCreated(false)
      //   setTimeout(() => {
      //     setAlertOpen(false)
      //   }, 3000)
      // }
    } catch (error) {
      setIsUserCreated(false)
    }
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
            <form onSubmit={handleFormSubmit}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6} lg={4}>
                  <TextField
                    fullWidth
                    required
                    label='First Name'
                    placeholder='First Name'
                    name='firstName'
                    value={firstName.value}
                    onChange={handleFirstNameChange}
                    error={firstNameError}
                    helperText={firstNameError ? 'Must be between 3 and 20 characters' : ''}
                    inputProps={{
                      minLength: 3, // Minimum length
                      maxLength: 15 // Maximum length
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <TextField fullWidth label='Middle Name' placeholder='Middle Name' name='Middle Name' />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <TextField
                    fullWidth
                    required
                    label='Last Name'
                    placeholder='Last Name'
                    name='Last Name'
                    value={LastName.value}
                    onChange={handleLastNameChange}
                    error={lastNameError}
                    helperText={lastNameError ? 'Must be between 3 and 20 characters' : ''}
                    inputProps={{
                      minLength: 3, // Minimum length
                      maxLength: 15 // Maximum length
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label='User Name' placeholder='User Name' name='User Name' />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    type='email'
                    label='Email'
                    placeholder='Email'
                    name='Email'
                    value={email.value}
                    onChange={handleEmailChange}
                    error={email.touched && !isEmailValid(email.value)}
                    helperText={email.touched && !isEmailValid(email.value) ? 'Invalid email address' : ''}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    label='Mobile No'
                    placeholder='Mobile Number'
                    name='Mobile'
                    value={mobile.value}
                    onChange={handleMobileChange}
                    inputProps={{
                      pattern: '^[0-9]*$', // Only allow numeric values
                      maxLength: 10 // You can set the maximum length if needed
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>Role</InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={20}
                      label='Role'
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Admin</MenuItem>
                      <MenuItem value={20}>Student</MenuItem>
                      <MenuItem value={30}>Teacher</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                {/* <Grid item xs={12}>
                  <InputLabel htmlFor='' style={{ color: 'black', marginBottom: '10px' }}>
                    Upload Images
                  </InputLabel>
                  <FileUploaderSingle />
                </Grid> */}
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

export default CreateUser
