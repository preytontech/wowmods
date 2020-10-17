import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyAddons from "../components/Mtable";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  MainView: {
    width: "100%",
  },
  actionBar: {
    margin: "10px",
  },
});

export default function AppBar() {
  const classes = useStyles();
  return (
    <div className={classes.MainView}>
      <div className={classes.actionBar}>
        <Button variant="contained" color="primary">
          Refresh
        </Button>
        <Button variant="contained" color="primary">
          Update
        </Button>
        <Button variant="contained" color="primary">
          Delete
        </Button>
        <Button variant="contained" color="primary" disabled={true}>
          Update All
        </Button>
        <Button variant="contained" color="primary" disabled={true}>
          Sync
        </Button>
      </div>
      <MyAddons />
    </div>
  );
}
