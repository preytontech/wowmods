import Mtable from "./components/Mtable";
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
      <Mtable />
    </div>
  );
}

export default App;
