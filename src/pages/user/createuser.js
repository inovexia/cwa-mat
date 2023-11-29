import React, { useState } from 'react'

// ** MUI Imports
import { Grid,Card,TextField,Button,Link,Box,CardHeader,CardContent,InputLabel,MenuItem,FormControl,Select } from '@mui/material'

import serialize from 'serialize-javascript'

// ** API
import UserApi from 'src/api/User'

const CreateUser = () => {
  const [firstName, setFirstName] = useState('')
  const [firstNameError, setFirstNameError] = useState(false)
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [lastNameError, setLastNameError] = useState(false)
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState({
    value: '',
    touched: false
  })
  const [emailError, setEmailError] = useState(false)
   const [mobile, setMobile] = useState({
     value: '',
     touched: false
   })
  const [role, setRole] = useState('')
  const [status, setStatus] = useState('')
  const UserFirstName = event => {
     const value = event.target.value
       setFirstName(value)   
     // Validation for minimum 3 characters and maximum 20 characters
     if (value.length >= 3 && value.length <= 20) {
       setFirstNameError(false) // Reset error when within the valid range
     } else {
       setFirstNameError(true) // Set error when outside the valid range
     }
  }
  const UserLastName = event => {
    const value = event.target.value

    // Validation for minimum 3 characters and maximum 20 characters
    if (value.length >= 3 && value.length <= 20) {
      setLastName(value)
      setLastNameError(false) // Reset error when within the valid range
    } else {
      setLastNameError(true) // Set error when outside the valid range
    }
  }
  const isEmailValid = value => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value)
  }
  const UserEmail = event => {
    const value = event.target.value
    setEmail({
      value: value,

    })
  }
  const UserMobile = event => {
    const value = event.target.value
    // Validation for numeric values only
    if (/^\d*$/.test(value)) {
      setMobile({
        value: value,

      })
    }
  }
  const UserName = e => {
    const value = e.target.value

    // Validate the user name
    const isValidUserName = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/g.test(value)

    setUserName(value)

    // Update error state based on validation
    if (!isValidUserName) {
      setUserNameError('Invalid user name')
    } else {
      setUserNameError('')
    }
  }
  const formData = {
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName,
    username: userName,
    role: role,
    status: status,
    mobile: mobile.value,
    email: email.value
  }
  const handleFormSubmit = async e => {
    e.preventDefault()
    // const formData = new FormData()
    // setFormData(Data)
    const Data = serialize(formData)
    // console.log(formData)
    // return
    try {
      // const response = await fetch(`${BASE_URL}/users/add`, requestOptions)
      const res = await UserApi.createUser(Data)
      console.log(res)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Grid container spacing={6}>
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
                    onChange={UserFirstName}
                    error={firstNameError}
                    helperText={firstNameError ? 'Must be between 3 and 20 characters' : ''}
                    inputProps={{
                      minLength: 3, // Minimum length
                      maxLength: 15 // Maximum length
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <TextField
                    fullWidth
                    label='Middle Name'
                    placeholder='Middle Name'
                    name='Middle Name'
                    value={middleName}
                    onChange={e => setMiddleName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <TextField
                    fullWidth
                    required
                    label='Last Name'
                    placeholder='Last Name'
                    name='Last Name'
                    value={lastName.value}
                    onChange={UserLastName}
                    error={lastNameError}
                    helperText={lastNameError ? 'Must be between 3 and 20 characters' : ''}
                    inputProps={{
                      minLength: 3, // Minimum length
                      maxLength: 15 // Maximum length
                    }}
                  />
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
                    onChange={UserEmail}
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
                    onChange={UserMobile}
                    inputProps={{
                      pattern: '^[0-9]*$', // Only allow numeric values
                      maxLength: 10 // You can set the maximum length if needed
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label='User Name'
                    placeholder='User Name'
                    name='User Name'
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>Role</InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={role}
                      label='Role'
                      onChange={e => setRole(e.target.value)}
                    >
                      <MenuItem value='superadmin'>Super Admin</MenuItem>
                      <MenuItem value='admin'>Admin</MenuItem>
                      <MenuItem value='teacher'>Teacher</MenuItem>
                      <MenuItem value='student'>Student</MenuItem>
                      <MenuItem value='parent'>Parent</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>Status</InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={status}
                      label='status'
                      onChange={e => setStatus(e.target.value)}
                    >
                      <MenuItem value={0}>Inactive</MenuItem>
                      <MenuItem value={1}>Active</MenuItem>
                      <MenuItem value={2}>Pending</MenuItem>
                      <MenuItem value={3}>Archived</MenuItem>
                    </Select>
                  </FormControl>
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
                    <Button type='submit' variant='contained' size='large'>
                      Save
                    </Button>
                    <Button type='submit' variant='contained' size='large'>
                      Cancel
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
