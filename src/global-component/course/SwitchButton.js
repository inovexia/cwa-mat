import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
// ** API
import CourseApi from 'src/api/Course'
// Import your API for course status update if not already imported

const SwitchButton = ({ courseGuid, courseStatus, onUpdateStatus }) => {
  const [status, setStatus] = useState('')
   const formData = {
     status: status
   }
  const handleConfirmOpen = async () => {
    try {
      const res = await CourseApi.courseStatus(formData)
      console.log(res)
      
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <Box>
      <FormGroup row>
        <Switch checked={courseStatus === '1' ? true : false} onClick={handleConfirmOpen} color='primary' courseGuid />
      </FormGroup>
    </Box>
  )
}

export default SwitchButton
