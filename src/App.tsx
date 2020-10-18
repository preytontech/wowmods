import MainView from "./layout/MainView";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
//import TopAppBar from "./layout/TopAppBar";
import { useDispatch, useSelector } from "react-redux";
import { getDirInfo } from "./redux/actions/onLoadActions/getDirInfo";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});
type WowDirState = {
  wowRootDir: string;
  wowVerDirList: Array<string>;
  loading: boolean;
  WowDirReducer: WowDirState;
};
function App() {
  const state = useSelector((state: WowDirState) => ({
    ...state.WowDirReducer,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    const regPath =
      "HKLM\\SOFTWARE\\WOW6432Node\\Blizzard Entertainment\\World of Warcraft";
    dispatch(getDirInfo(regPath));
  }, []);
  console.log("loading:", state.loading, "state:", state);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <TopAppBar /> top bar should be here along with close/minimize function*/}
      <MainView />
    </div>
  );
}

export default App;
