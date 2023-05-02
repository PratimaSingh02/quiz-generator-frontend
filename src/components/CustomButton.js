import React, { useContext } from "react";
import { Button, Typography } from "@mui/material";
import { getQuiz, getRecommendations, getSummary } from "../api";
import { VideoContext } from "../context";

export default function CustomButton({ setLoading }) {
  const { videoId, setValues } = useContext(VideoContext);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await getQuiz(videoId);
      // console.log(response);
      if (response?.questions?.length > 0) {
        setValues(response);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="contained"
      sx={{
        padding: "1em",
        marginLeft: "2em",
      }}
      onClick={handleSubmit}
    >
      <Typography variant="body2" sx={{ color: "white" }}>
        Submit
      </Typography>
    </Button>
  );
}
