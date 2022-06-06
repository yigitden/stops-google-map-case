import React from "react";
import Typography from "@mui/material/Typography";
import { NavbarStyle } from "./NavbarStyle";

const NavbarText = () => {
  return (
    <Typography variant="h6" component="div" sx={NavbarStyle.navbar}>
      React App
    </Typography>
  );
};

export default NavbarText;
