import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyAddonsTable from "../../AddonTable/Index";
import { Button } from "@material-ui/core";
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

export default function MyAddons({
  handleRefresh = undefined,
  handleUpdate = undefined,
  handleDelete = undefined,
  handleUpdateAll = undefined,
  handleSync = undefined,
}) {
  const isPatreonSub = false;

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
          <Button
            onClick={handleUpdate}
            size="small"
            style={{ fontSize: ".8em" }}
            color="primary"
          >
            <Update />
            Update
          </Button>
          <Button
            onClick={handleDelete}
            size="small"
            style={{ fontSize: ".8em" }}
            color="primary"
          >
            <DeleteForever />
            Delete
          </Button>
          <Button
            onClick={handleUpdateAll}
            size="small"
            style={{ fontSize: ".8em" }}
            color="primary"
            disabled={!isPatreonSub}
          >
            <Update />
            Update All
          </Button>
          <Button
            onClick={handleSync}
            size="small"
            style={{ fontSize: ".8em" }}
            color="primary"
            disabled={!isPatreonSub}
          >
            <Sync />
            Sync
          </Button>
        </div>
        <MyAddonsTable />
      </div>
    </div>
  );
}
