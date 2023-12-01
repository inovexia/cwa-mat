import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
// ** API
import UserApi from 'src/api/User'

const SwitchField = ({ id, status }) => {
  const [switchValue, setSwitchValue] = useState(false)

  // ** Get Current Status
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const res = await UserApi.changeStatus(id)
          reset(res.payload)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [id])

  const handleSwitchChange = event => {
    setSwitchValue(event.target.checked)
  }
  return (
    <Box>
      <FormGroup row>
        <Switch color='primary' checked={status == '1' ? true : false} onChange={handleSwitchChange} />
      </FormGroup>
    </Box>
  )
}

export default SwitchField
