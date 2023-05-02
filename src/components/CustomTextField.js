import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { VideoContext } from "../context";

export default function CustomTextField() {
  const { setVideoId } = useContext(VideoContext);

  return (
    <TextField
      label="Enter Youtube URL"
      variant="outlined"
      sx={{
        width: "30%",
        boxShadow: "5px 10px #D3D3D3",
      }}
      onChange={(e) => setVideoId(e.target.value)}
    />
  );
}
