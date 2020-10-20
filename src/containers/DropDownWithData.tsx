import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../components/layout/TopAppBar/DropDown";
import { getDirInfo } from "../redux/actions/onLoadActions/getDirInfo";

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
  }, []);
  const { loading, wowVerDirList, error } = useSelector(
    (state: WowDirState) => ({
      ...state.WowDirReducer,
    })
  );

  return (
    <>
      <DropDown loading={loading} dirList={wowVerDirList} error={error} />
    </>
  );
};

export default DropDownWithData;
