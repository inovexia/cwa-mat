// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
// ** Global Components
import FileUploaderSingle from 'src/global-component/formelement/file-upload'
// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Actions Imports
// import { addUser } from 'src/store/apps/user'

// const showErrors = (field, valueLen, min) => {
//   if (valueLen === 0) {
//     return `${field} field is required`
//   } else if (valueLen > 0 && valueLen < min) {
//     return `${field} must be at least ${min} characters`
//   } else {
//     return ''
//   }
// }

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

// const schema = yup.object().shape({
//   company: yup.string().required(),
//   country: yup.string().required(),
//   email: yup.string().email().required(),
//   contact: yup
//     .number()
//     .typeError('Contact Number field is required')
//     .min(10, obj => showErrors('Contact Number', obj.value.length, obj.min))
//     .required(),
//   fullName: yup
//     .string()
//     .min(3, obj => showErrors('First Name', obj.value.length, obj.min))
//     .required(),
//   username: yup
//     .string()
//     .min(3, obj => showErrors('Username', obj.value.length, obj.min))
//     .required()
// })

const defaultValues = {
  email: '',
  company: '',
  country: '',
  fullName: '',
  username: '',
  contact: Number('')
}

const SidebarAddUser = props => {
  // ** Props
  const { open, toggle } = props

  // ** State
  const [plan, setPlan] = useState('basic')
  const [role, setRole] = useState('subscriber')

  // ** Hooks
  // const dispatch = useDispatch()
  // const store = useSelector(state => state.user)

  const {
    reset,
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    // resolver: yupResolver(schema)
  })

  // const onSubmit = data => {
  //   if (store.allData.some(u => u.email === data.email || u.username === data.username)) {
  //     store.allData.forEach(u => {
  //       if (u.email === data.email) {
  //         setError('email', {
  //           message: 'Email already exists!'
  //         })
  //       }
  //       if (u.username === data.username) {
  //         setError('username', {
  //           message: 'Username already exists!'
  //         })
  //       }
  //     })
  //   } else {
  //     dispatch(addUser({ ...data, role, currentPlan: plan }))
  //     toggle()
  //     reset()
  //   }
  // }

  const handleClose = () => {
    setPlan('basic')
    setRole('subscriber')
    setValue('contact', Number(''))
    toggle()
    reset()
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <Header>
        <Typography variant='h6'>Add User</Typography>
        <IconButton size='small' onClick={handleClose} sx={{ color: 'text.primary' }}>
          <Icon icon='mdi:close' fontSize={20} />
        </IconButton>
      </Header>
      <Box sx={{ p: 5 }}>
        <form>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField fullWidth required label='First Name' placeholder='First Name' name='firstName' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Middle Name' placeholder='Middle Name' name='Middle Name' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth required label='Last Name' placeholder='Last Name' name='Last Name' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth required type='email' label='Email' placeholder='Email' name='Email' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth required label='Mobile No' placeholder='Mobile Number' name='Mobile' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='User Name' placeholder='User Name' name='User Name' />
            </Grid>
            <Grid item xs={12}>
              <TextField select label='Role' fullWidth>
                <MenuItem value='superadmin'>Super Admin</MenuItem>
                <MenuItem value='admin'>Admin</MenuItem>
                <MenuItem value='teacher'>Teacher</MenuItem>
                <MenuItem value='student'>Student</MenuItem>
                <MenuItem value='parent'>Parent</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField select label='Status' fullWidth>
                <MenuItem value={0}>Inactive</MenuItem>
                <MenuItem value={1}>Active</MenuItem>
                <MenuItem value={2}>Pending</MenuItem>
                <MenuItem value={3}>Archived</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center'
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
      </Box>
    </Drawer>
  )
}

export default SidebarAddUser
