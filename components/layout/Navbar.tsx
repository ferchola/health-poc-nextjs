import React, { useState, useCallback } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = (props: NavBarProps) => {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const appBarStyle = {
    backgroundColor: "#05b0a7",
  };
  // const menuBtnStyle = {
  //   marginRight: theme.spacing(2),
  // }

  const titleStyle = {
    flexGrow: 1,
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLoginClick = () => {
    console.log("login btn clicked");
    setShowLogin(true);
    props.onLoginClick(true);
  };

  return (
    <AppBar style={appBarStyle} position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={titleStyle}>
          Mi portal de salud
        </Typography>
        <Button color="inherit" onClick={() => handleLoginClick()}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

type NavBarProps = {
  onLoginClick: (isVisible: boolean) => void;
};

export default Navbar;
