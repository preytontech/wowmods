import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import LocateInstallButton from "../components/LocateInstallButton";
import { IWowDirState } from "../redux/reducers/dirReducer";

type DirState = {
  WowDirReducer: IWowDirState;
};

function InitializeAppWithData() {
  const { loading, error } = useSelector((state: DirState) => ({
    ...state.WowDirReducer,
  }));

  if (loading) return <h3>Loading...</h3>;
  if (error) {
    return (
      <>
        <h4>
          Here we will search for wow paths and build our inital wow install
          listing
        </h4>
        <LocateInstallButton />
      </>
    );
  }
  return <Redirect to="/MyAddons" />;
}

export default InitializeAppWithData;
