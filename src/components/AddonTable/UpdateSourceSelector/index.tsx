import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import {
  createStyles,
  FormControl,
  InputBase,
  Select,
  Theme,
  withStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";

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
      //   width: "14em",
      "&:hover": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  })
)(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function UpdateSourceSelector(props) {
  const classes = useStyles();

  if (props.data) {
    return (
      <FormControl
        style={{ flexDirection: "unset", paddingRight: "2.5em" }}
        className={(classes.margin, "menubar-btn")}
      >
        <Select value={props.data} input={<BootstrapInput />}>
          <MenuItem id="wowi" value="wowi">
            WoWInterface
          </MenuItem>
          <MenuItem id="curse" value="curse">
            Curseforge
          </MenuItem>
          <MenuItem id="git" value="git">
            GitHub
          </MenuItem>
        </Select>
      </FormControl>
    );
  } else {
    return <></>;
  }
}

UpdateSourceSelector.propTypes = {
  style: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.string,
};
