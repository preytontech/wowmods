import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { AccountCircle } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    display: "flex",
    color: "white",
    height: "100%",
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
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      id={menuId}
      keepMounted
      open={Boolean(anchorEl)}
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
      <div className={classes.sectionAppbtns}>
        <Button
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
          className={"menubar-btn"}
        >
          <AccountCircle />
        </Button>
      </div>
      {renderMenu}
    </div>
  );
}
