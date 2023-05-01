import React from 'react'
import { Button, Typography } from '@mui/material'

export default function CustomButton() {
    return (
        <Button variant="contained"
            sx={{
                padding: "1em",
                marginLeft: "2em"
            }}>
            <Typography variant="body2" sx={{ color: "white" }}>
                Submit
            </Typography>
        </Button>
    )
}
