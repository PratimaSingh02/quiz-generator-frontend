import React from 'react'
import { TextField } from '@mui/material'

export default function CustomTextField() {
  return (
    <TextField
      label="Enter Youtube URL"
      variant="outlined"
      sx={{
        width: "30%",
        boxShadow: "5px 10px #D3D3D3"
      }}
    />
  )
}
