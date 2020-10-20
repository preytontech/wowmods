/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
//Views
//React Stuff
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { getDirInfo } from "./redux/actions/onLoadActions/getDirInfo";
import MyAddons from "./components/layout/MyAddons";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GetMoreAddons from "./components/layout/GetMoreAddons";
import TopAppBar from "./components/layout/TopAppBar";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router basename="/">
        <TopAppBar />
        <Route exact path="/" component={MyAddons} />
        <Route exact path="/getmoreaddons" component={GetMoreAddons} />
      </Router>
    </div>
  );
}

export default App;
