import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'

const SwitchField = () => {
  return (
    <Box>
      <FormGroup row>
        <Switch color='primary' />
      </FormGroup>
    </Box>
  )
}

export default SwitchField
