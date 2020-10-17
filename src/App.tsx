import MainView from "./layout/MainView";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MainView />
    </div>
  );
}

export default App;
