import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { VideoContext } from "../context";

export default function Summary() {
  const { summary } = useContext(VideoContext);

  return (
    <Box
      sx={{
        width: "30%",
        borderRight: "2px solid #D3D3D3",
        padding: "0 1em 1em 1em",
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
        Summary
      </Typography>
      {summary.map((para, index) => (
        <Typography variant="body2" key={index} sx={{ marginTop: "1em" }}>
          {para}
        </Typography>
      ))}
    </Box>
  );
}
