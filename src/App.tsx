/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
//Views
//React Stuff
import { makeStyles } from "@material-ui/core/styles";
import MyAddons from "./components/layout/MyAddons";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import GetMoreAddons from "./components/layout/GetMoreAddons";
import TopAppBar from "./components/layout/TopAppBar";
import NoInternet from "./components/layout/Errors/NoInternet";
import UnableToLocateWoW from "./components/layout/Errors/UnableToLocateWoW";
import userAccount from "./components/layout/User/MyAccount";
import userSettings from "./components/layout/User/Settings";
import AboutWoWMods from "./components/layout/About";
import ManuallyLookupDir from "./containers/ManuallyLookupDir";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router basename={"/"}>
        <TopAppBar />
        <Switch>
          <Route exact path="/" component={ManuallyLookupDir} />
          <Route exact path="/MyAddons" component={MyAddons} />
          <Route exact path="/GetMoreAddons" component={GetMoreAddons} />
          <Route exact path="/userSettings" component={userSettings} />
          <Route exact path="/userAccount" component={userAccount} />
          <Route
            exact
            path="/UnableToLocateWoW"
            component={UnableToLocateWoW}
          />
          <Route exact path="/NoInternet" component={NoInternet} />
          <Route exact path="/About" component={AboutWoWMods} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
