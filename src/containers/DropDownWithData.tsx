import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../components/layout/TopAppBar/DropDown";
import {
  getDirInfo,
  lookupRootDir,
} from "../redux/actions/onLoadActions/getDirInfo";
const { dialog } = window.require("electron").remote;

type WowDirState = {
  wowRootDir: string;
  wowVerDirList: Array<object>;
  loading: boolean;
  error: string;
  WowDirReducer: WowDirState;
};
const DropDownWithData = () => {
  const dispatch = useDispatch();

  //this function runs only on the first load and fetches rootpath from registry
  //and uses that path to search for retail, classic and beta wow install dirs to
  //the TopAppBar dropdown menu
  useEffect(() => {
    const regPath =
      "HKLM\\SOFTWARE\\WOW6432Node\\Blizzard Entertainment\\World of Warcraft";
    dispatch(getDirInfo(regPath));
  }, [dispatch]);
  const { loading, wowVerDirList, error } = useSelector(
    (state: WowDirState) => ({
      ...state.WowDirReducer,
    })
  );

  const handleAddDir = async () => {
    var path = await dialog.showOpenDialog({
      properties: ["openDirectory"],
    });
    dispatch(lookupRootDir(path.filePaths[0].toString()));
  };

  return (
    <>
      <DropDown
        loading={loading}
        dirList={wowVerDirList}
        error={error}
        handleAddDir={handleAddDir}
      />
    </>
  );
};

export default DropDownWithData;
