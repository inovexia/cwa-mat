import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
// ** API
import CourseApi from 'src/api/Course'
// Import your API for course status update if not already imported

const SwitchButton = ({ courseGuid, courseStatus, onUpdateStatus }) => {
  const handleConfirmOpen = async () => {
    const newStatus = courseStatus === '0' ? '1' : '0'

    try {
      // Make an API request to update the course status
      const formData = new FormData()
      formData.append('status', newStatus)

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: formData
      }
      console.log(newStatus)
      // const response = await fetch(`/course/status/${courseGuid}`, requestOptions)
      const response = await CourseApi.CourseStatus(requestOptions)
      if (response.ok) {
        // Handle success response
        console.log('Status changed successfully')
        onUpdateStatus(newStatus) // Update the status in your parent component
      } else {
        // Handle error response
        console.error('Failed to change status')
      }
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
