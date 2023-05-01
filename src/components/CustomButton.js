import React, { useContext } from 'react'
import { Button, Typography } from '@mui/material'
import { getQuiz, getRecommendations, getSummary } from '../api'
import { VideoContext } from '../context';

export default function CustomButton() {
    const { setSummary, setQuestions, setRecommendations } = useContext(VideoContext);

    const handleSubmit = async () => {
        const questions = await getQuiz();
        if (questions.length > 0)
            setQuestions(questions);
        const summary = await getSummary();
        if (summary.length > 0)
            setSummary(summary);
        const recommendations = await getRecommendations();
        if (recommendations.length > 0)
            setRecommendations(recommendations);
        console.log(recommendations);

    }

    return (
        <Button variant="contained"
            sx={{
                padding: "1em",
                marginLeft: "2em"
            }}
            onClick={handleSubmit}
        >
            <Typography variant="body2" sx={{ color: "white" }}>
                Submit
            </Typography>
        </Button>
    )
}
