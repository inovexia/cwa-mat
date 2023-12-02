// ** MUI Imports
import Paper from '@mui/material/Paper'
import {Table, Typography, Box} from '@mui/material'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Checkbox from '@mui/material/Checkbox'
// const createData = (name, calories, fat, carbs, protein) => {
//   return { name, calories, fat, carbs, protein }
// }
import Toolbar from 'src/global-component/toolbar'
import DeleteUser from 'src/global-component/user/deleteuser'
import Icon from 'src/@core/components/icon'
import SwitchField from 'src/global-component/formelement/Switch'
// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9)
// ]

const TableBasic = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>Username</TableCell>
            <TableCell>User Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            <TableRow >
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>
                <Typography variant='body2'>
                  asas
                </Typography>
                <Typography variant='body2'>
                  asda
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='body2'>
                 asd
                </Typography>
                <Typography variant='body2'>
                  asd
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='body2'>
                  asdasd
                </Typography>
              </TableCell>
              <TableCell>
                <SwitchField />
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex' }}>
                  <a href={`/user/edituser`} variant='contained'>
                    <Icon icon='material-symbols-light:edit' />
                  </a>
                  <DeleteUser />
                </Box>
              </TableCell>
            </TableRow>
 
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableBasic
