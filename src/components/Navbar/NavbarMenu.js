import React, { useState } from "react";
import { IconButton, MenuItem, Menu } from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";

const NavbarMenu = ({ setIsLogged }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => setIsLogged(false)}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default NavbarMenu;
