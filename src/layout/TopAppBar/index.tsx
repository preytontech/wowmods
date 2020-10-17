import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { AccountCircle, Close, Minimize } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    display: "flex",
    color: "white",
  },
  Toolbar: {
    minHeight: "fit-content",
    paddingRight: 0,
    paddingLeft: 0,
    backgroundColor: "rgb(56, 56, 56)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktopBtns: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionAppbtns: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    marginRight: "2em",
  },
  SystemButton: {
    borderRadius: 0,
  },
  AddonBtns: {
    marginRight: "2em",
  },
}));

export default function TopAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const CloseApp = () => {
    window.close();
  };

  const MinimizeApp = (event) => {
    const { BrowserWindow } = require("electron");
    // Retrieve focused window
    BrowserWindow.getFocusedWindow().minimize();
    // window.minimizeWindow();
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <Button className={(classes.AddonBtns, "menubar-btn")}>My Addons</Button>
      <Button className={(classes.AddonBtns, "menubar-btn")}>
        Get more addons
      </Button>

      <div className={classes.grow} />
      <div className={(classes.sectionAppbtns, "menubar-btn")}>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
          className={classes.SystemButton}
        >
          <AccountCircle />
        </IconButton>
      </div>
      {renderMenu}
    </div>
  );
}
