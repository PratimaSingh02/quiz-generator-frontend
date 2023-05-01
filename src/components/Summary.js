import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Summary() {
    return (
        <Box
            sx={{
                width: "30%",
                borderRight: "2px solid #D3D3D3",
                padding: "1em",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <Typography
                variant="h6"
                color="#191970"
            >
                Summary
            </Typography>
            <Typography variant="body2">
                There are multiple ways to generate lorem ipsum text in VS Code.

                For example, you can use the built-in Emmet extension.

                Open an HTML file, start typing lorem and click on the option.
            </Typography>
        </Box>
    )
}
