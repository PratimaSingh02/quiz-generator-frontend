import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { VideoContext } from '../context';

export default function Quiz() {
    const { questions } = useContext(VideoContext);

    return (
        <Box
            sx={{
                width: "40%",
                borderRight: "2px solid #D3D3D3",
                padding: "1em",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflow: "auto"
            }}
        >
            <Typography
                variant="h6"
                color="#191970"
            >
                Quiz
            </Typography>

            <Box
                sx={{
                    width: "95%",
                    // border: "1px solid yellow"
                }}
            >
                {
                    questions.map((item, index) => {
                        return <Box key={index} sx={{ margin: "1em 0" }}>
                            <Typography variant="body1">
                                {item.question}
                            </Typography>

                            {
                                item.options.map((option, optionIndex) =>
                                    <Typography variant="body2" key={optionIndex}
                                        sx={{ marginLeft: "1em" }}
                                    >
                                        {optionIndex + 1}.  {option}
                                    </Typography>
                                )
                            }

                            <Typography variant="caption">
                                Correct Answer: {item.options[item.answer]}
                            </Typography>
                        </Box>
                    }
                    )
                }
            </Box>
        </Box>
    )
}
