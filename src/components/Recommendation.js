import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Quiz() {
    return (
        <Box
            sx={{
                width: "30%",
                padding: "1em",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflowY: "auto"
            }}
        >
            <Typography
                variant="h6"
                color="#191970"
            >
                Recommended
            </Typography>
            <iframe width="350" height="220"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                title="abc"
            >
            </iframe>
        </Box>
    )
}
