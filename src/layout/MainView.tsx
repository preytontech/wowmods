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
    zIndex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: "65px",
    color: "white",
    padding: 0,
    width: "fit-content",
  },
});

export default function AppBar() {
  const isPatreonSub = false;

  const handleRefresh = () => {
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
      <div style={{ maxHeight: "100vh", overflow: "auto" }}>
        <div className={classes.actionBar}>
          <Button
            size="small"
            style={{ fontSize: ".8em" }}
            color="primary"
            onClick={handleRefresh}
          >
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
            disabled={!isPatreonSub}
          >
            <Update />
            Update All
          </Button>
          <Button
            size="small"
            style={{ fontSize: ".8em" }}
            color="primary"
            disabled={!isPatreonSub}
          >
            <Sync />
            Sync
          </Button>
        </div>
        <MyAddons />
      </div>
    </div>
  );
}
