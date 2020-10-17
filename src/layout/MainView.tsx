import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyAddons from "../components/Mtable";
import { Button } from "@material-ui/core";
import { getAllDirs } from "../services/native/win/fileReadWrite";
import { readRegistry } from "../services/native/win/registryReader";
import { DeleteForever, Refresh, Sync, Update } from "@material-ui/icons";

const useStyles = makeStyles({
  MainView: {
    width: "100%",
  },
  actionBar: {
    margin: "10px",
  },
});

export default function AppBar() {
  const handleSync = () => {
    readRegistry("HKLM\\SOFTWARE").then((res) => {
      console.log(res);
      getAllDirs("C:/ProgramData/Dell").then((res) => {
        console.log(res);
      });
    });
  };
  const classes = useStyles();
  return (
    <div className={classes.MainView}>
      <div className={classes.actionBar}>
        <Button size="small" style={{ fontSize: ".8em" }} color="primary">
          <Refresh /> Refresh
        </Button>
        <Button size="small" style={{ fontSize: ".8em" }} color="primary">
          <Update />
          Update
        </Button>
        <Button size="small" style={{ fontSize: ".8em" }} color="primary">
          <DeleteForever />
          Delete
        </Button>
        <Button
          size="small"
          style={{ fontSize: ".8em" }}
          color="primary"
          disabled={true}
        >
          <Update />
          Update All
        </Button>
        <Button
          size="small"
          style={{ fontSize: ".8em" }}
          onClick={handleSync}
          color="primary"
        >
          <Sync />
          Sync
        </Button>
      </div>
      <div style={{ maxHeight: "100vh", overflow: "auto" }}>
        <MyAddons />
      </div>
    </div>
  );
}
