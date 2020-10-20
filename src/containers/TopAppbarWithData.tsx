import React from "react";
import { useSelector } from "react-redux";
import TopAppBar from "../components/layout/TopAppBar";

type WowDirState = {
  wowRootDir: string;
  wowVerDirList: Array<object>;
  loading: boolean;
  WowDirReducer: WowDirState;
};
const TopAppbarWithData = () => {
  const { loading, wowVerDirList } = useSelector((state: WowDirState) => ({
    ...state.WowDirReducer,
  }));

  return (
    <>
      <TopAppBar loading={loading} dirList={wowVerDirList} />
    </>
  );
};

export default TopAppbarWithData;
