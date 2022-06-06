import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { LoadingStyle } from "./LoadingStyle";
const Loading = () => {
  return (
    <Box sx={LoadingStyle.loading}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
