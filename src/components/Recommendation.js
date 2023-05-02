import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { VideoContext } from "../context";

export default function Recommendation() {
  const { recommendations } = useContext(VideoContext);

  return (
    <Box
      sx={{
        width: "30%",
        borderRight: "2px solid #D3D3D3",
        padding: "0 1em 1em 0",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "auto",
      }}
    >
      <Typography
        variant="h6"
        color="#191970"
        sx={{
          position: "sticky",
          top: "0",
          backgroundColor: "white",
          width: "100%",
          textAlign: "center",
        }}
      >
        Recommended
      </Typography>
      {recommendations.map((link, index) => (
        <iframe
          width="350"
          height="220"
          src={"https://www.youtube.com/embed/" + link}
          title={index}
          key={index}
          className="iframe"
        ></iframe>
      ))}
    </Box>
  );
}
