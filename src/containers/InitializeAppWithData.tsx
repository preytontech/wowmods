import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import LocateInstallButton from "../components/LocateInstallButton";
import { getPathFromRegistry } from "../redux/actions/dirDropdownActions";
import { IWowDirState } from "../redux/reducers/dirReducer";

type DirState = {
  WowDirReducer: IWowDirState;
};

function InitializeAppWithData() {
  const dispatch = useDispatch();
  useEffect(() => {
    const regPath =
      "HKLM\\SOFTWARE\\WOW6432Node\\Blizzard Entertainment\\World of Warcraft";
    dispatch(getPathFromRegistry(regPath));
  }, []);
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
