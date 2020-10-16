import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyAddons from "../components/Mtable";

const useStyles = makeStyles({
  MainView: {
    width: "100%",
  },
});

export default function AppBar() {
  const classes = useStyles();
  return (
    <div className={classes.MainView}>
      <MyAddons />
    </div>
  );
}
