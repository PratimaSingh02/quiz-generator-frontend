import React, { Component } from "react";
import { Box, Typography } from "@mui/material";

export default class Topbar extends Component {
  render() {
    return (
      <Box
        sx={{
          backgroundColor: "#191970",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "3em",
          zIndex: 999,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
          }}
        >
          STUDY.AI
        </Typography>
      </Box>
    );
  }
}
