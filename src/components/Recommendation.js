import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { VideoContext } from '../context';

export default function Recommendation() {
    const { recommendations } = useContext(VideoContext);

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
            {recommendations.map((link, index) =>
                <iframe width="350" height="220"
                    src={link}
                    title={index}
                    key={index}
                    className="iframe"
                >
                </iframe>
            )}
        </Box>
    )
}
