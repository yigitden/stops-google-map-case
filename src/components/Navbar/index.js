import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import NavbarText from "./NavbarText";
import NavbarMenu from "./NavbarMenu";
import { NavbarStyle } from "./NavbarStyle";

const Navbar = ({ setIsLogged }) => {
  return (
    <Box sx={NavbarStyle.navbar}>
      <AppBar position="static">
        <Toolbar>
          <NavbarText />
          <NavbarMenu setIsLogged={setIsLogged} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
