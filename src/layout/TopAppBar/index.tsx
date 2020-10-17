import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { AccountCircle } from "@material-ui/icons";
import {
  Button,
  createStyles,
  FormControl,
  InputBase,
  Select,
  Theme,
  withStyles,
} from "@material-ui/core";

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 5,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      width: "14em",
      "&:hover": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  })
)(InputBase);

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
  AddonBtns: {
    marginRight: "2em",
  },
  margin: {
    margin: theme.spacing(1),
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

      <FormControl
        style={{ flexDirection: "unset", paddingRight: "2.5em" }}
        className={(classes.margin, "menubar-btn")}
      >
        <Select value={2} input={<BootstrapInput />}>
          <MenuItem value={1}>
            Beta - D:\Games\World of Warcraft\_beta_
          </MenuItem>
          <MenuItem value={2}>
            Retail - D:\Games\World of Warcraft\_retail_
          </MenuItem>
          <MenuItem value={3}>
            Classic - D:\Games\World of Warcraft\_classic_
          </MenuItem>
        </Select>
      </FormControl>

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
