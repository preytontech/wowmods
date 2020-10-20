/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
//Views
//React Stuff
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { getDirInfo } from "./redux/actions/onLoadActions/getDirInfo";
import MyAddons from "./components/layout/MyAddons";
import TopAppbarWithData from "./containers/TopAppbarWithData";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GetMoreAddons from "./components/layout/GetMoreAddons";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  //this function runs only on the first load and fetches rootpath from registry
  //and uses that path to search for retail, classic and beta wow install dirs to
  //the TopAppBar dropdown menu
  useEffect(() => {
    const regPath =
      "HKLM\\SOFTWARE\\WOW6432Node\\Blizzard Entertainment\\World of Warcraft";
    dispatch(getDirInfo(regPath));
  }, []);

  return (
    <div className={classes.root}>
      <Router basename="/">
        <TopAppbarWithData />
        <Route exact path="/" component={MyAddons} />
        <Route exact path="/getmoreaddons" component={GetMoreAddons} />
      </Router>
    </div>
  );
}

export default App;
