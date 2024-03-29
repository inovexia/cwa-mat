import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/router'
import serialize from 'serialize-javascript'

// ** MUI Imports
import {
  Grid,
  Card,
  TextField,
  Button,
  Link,
  CardHeader,
  CardContent,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from '@mui/material'

// ** API
import UserApi from 'src/api/User'
import AuthApi from 'src/api/Auth'

const CreateUser = () => {
  const router = useRouter()
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      first_name: '',
      middle_name: '',
      last_name: '',
      role: 'student',
      status: '',
      mobile: '',
      email: ''
    }
  })

  const [settings, setSettings] = useState('')
  const [reqField, setReqField] = useState('')

  // ** Get Settings
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await AuthApi.regCommonSettings()
        setSettings(res && res.payload)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])
  // ** Get Required Field
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await AuthApi.RegRequiredField()
        setReqField(res && res.payload)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const handleFormSubmit = async data => {
    if (isValid) {
      try {
        const formData = new FormData()

        Object.entries(data).forEach(([key, value]) => {
          formData.append(key, value)
        })
        const res = await UserApi.createUser(formData)

        if (res.success === true) {
          toast.success('User created successfully')
          setTimeout(() => {
            router.push('/user')
          }, 3000)
        } else {
          toast.error('Failed to create user')
        }
      } catch (error) {
        console.error(error)
        toast.error('An error occurred while creating the user')
      }
    } else {
      console.log('Form has validation errors')
    }
  }

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Create User' />
            <CardContent>
              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Grid container spacing={2}>
                  {settings && settings.auto_generate_username !== 'true' ? (
                    <Grid item xs={12} sx={{ mt: 3 }}>
                      <FormControl sx={{ width: '100%' }}>
                        <TextField
                          {...register('username')}
                          label='Username'
                          variant='outlined'
                          name='username'
                          pattern='[A-Za-z]{1,}'
                          required
                        />
                      </FormControl>
                    </Grid>
                  ) : (
                    ''
                  )}

                  <Grid item xs={12} md={4} sx={{ mt: 3 }}>
                    <FormControl fullWidth>
                      <Controller
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label='First Name'
                            variant='outlined'
                            error={!!errors.first_name}
                            helperText={errors.first_name && 'First name must be between 3 and 15 characters'}
                          />
                        )}
                        control={control}
                        name='first_name'
                        rules={{
                          required: 'First name is required',
                          minLength: {
                            value: 3,
                            message: 'First name should be at least 3 characters'
                          },
                          maxLength: {
                            value: 15,
                            message: 'First name should not exceed 15 characters'
                          }
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={4} sx={{ mt: 3 }}>
                    <FormControl fullWidth>
                      <Controller
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label='Middle Name'
                            variant='outlined'
                            error={!!errors.middle_name}
                            helperText={errors.middle_name && 'Middle name must be between 3 and 15 characters'}
                          />
                        )}
                        control={control}
                        name='middle_name'
                        rules={{
                          minLength: {
                            value: 3,
                            message: 'Middle name should be at least 3 characters'
                          },
                          maxLength: {
                            value: 15,
                            message: 'Middle name should not exceed 15 characters'
                          }
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={4} sx={{ mt: 3 }}>
                    <FormControl fullWidth>
                      <Controller
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label='Last Name'
                            variant='outlined'
                            error={!!errors.last_name}
                            helperText={errors.last_name && 'Last name must be between 3 and 15 characters'}
                          />
                        )}
                        control={control}
                        name='last_name'
                        rules={{
                          required: 'Last name is required',
                          minLength: {
                            value: 3,
                            message: 'Last name should be at least 3 characters'
                          },
                          maxLength: {
                            value: 15,
                            message: 'Last name should not exceed 15 characters'
                          }
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ mt: 3 }}>
                    <FormControl sx={{ width: '100%' }}>
                      <InputLabel id='type-select-label'>User Role</InputLabel>
                      <Controller
                        name='role'
                        control={control}
                        defaultValue='student' // Default value set to 'student'
                        render={({ field }) => (
                          <Select {...field} labelId='type-select-label' id='type-select' label='User Role' required>
                            <MenuItem value='superadmin'>Super Admin</MenuItem>
                            <MenuItem value='admin'>Admin</MenuItem>
                            <MenuItem value='teacher'>Instructor</MenuItem>
                            <MenuItem value='student'>Student</MenuItem>
                            <MenuItem value='parent'>Parent</MenuItem>
                          </Select>
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ mt: 3 }}>
                    <FormControl sx={{ width: '100%' }}>
                      <InputLabel id='type-select-status'>Status</InputLabel>
                      <Controller
                        name='status'
                        control={control}
                        defaultValue='0'
                        render={({ field }) => (
                          <Select {...field} labelId='type-select-status' id='type-select' label='Status' required>
                            <MenuItem value='1'>Active</MenuItem>
                            <MenuItem value='0'>Inactive</MenuItem>
                          </Select>
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ mt: 3 }}>
                    <FormControl sx={{ width: '100%' }}>
                      {reqField && reqField.email ? (
                        <TextField
                          {...register('email')}
                          label='Email'
                          variant='outlined'
                          name='email'
                          pattern='[A-Za-z]{1,}'
                          required
                        />
                      ) : (
                        <TextField
                          {...register('email')}
                          label='Email'
                          variant='outlined'
                          name='email'
                          pattern='[A-Za-z]{1,}'
                        />
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ mt: 3 }}>
                    <FormControl sx={{ width: '100%' }}>
                      {reqField && reqField.mobile ? (
                        <TextField
                          {...register('mobile')}
                          label='Mobile Number'
                          variant='outlined'
                          name='mobile'
                          pattern='[A-Za-z]{1,}'
                          required
                        />
                      ) : (
                        <TextField
                          {...register('mobile')}
                          label='Mobile Number'
                          variant='outlined'
                          name='mobile'
                          pattern='[A-Za-z]{1,}'
                        />
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Button variant='contained' size='medium' type='submit' sx={{ mt: 5 }}>
                    Create User
                  </Button>
                  <Button variant='contained' size='medium' component={Link} href='/user' sx={{ mt: 5, ml: 3 }}>
                    Cancel
                  </Button>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default CreateUser
