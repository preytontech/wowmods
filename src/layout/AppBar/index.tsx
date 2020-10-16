import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  appbar: {
    width: "100%",
    height: "60px",
    backgroundColor: "rgb(33,33,33)",
    marginBottom: ".5em",
  },
});

export default function AppBar() {
  const classes = useStyles();
  return <div className={classes.appbar}></div>;
}
