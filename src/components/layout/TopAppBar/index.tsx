import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { AccountCircle } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import DropDownWithData from "../../../containers/DropDownWithData";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    flexGrow: 1,
    display: "flex",
    color: "white",
    position: "absolute",
    top: 0,
    left: "60px",
    right: "83px",
    height: "60px",
  },
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
  AddonBtns: {
    marginRight: "2em",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
interface Props {
  loading: boolean;
  dirList: Array<object>;
}

export default function TopAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<any>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent): void => {
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
    <div className={classes.AppBar}>
      <Button
        component={Link}
        to="/"
        className={(classes.AddonBtns, "menubar-btn")}
      >
        My Addons
      </Button>
      <Button
        component={Link}
        to="/getmoreaddons"
        className={(classes.AddonBtns, "menubar-btn")}
      >
        Get more addons
      </Button>

      <div className={classes.grow} />
      <DropDownWithData />

      <div>
        <Button
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
          style={{ height: "100%", borderRadius: 0, minWidth: "40px" }}
          className="menubar-btn"
        >
          <AccountCircle />
        </Button>
      </div>
      {renderMenu}
    </div>
  );
}
