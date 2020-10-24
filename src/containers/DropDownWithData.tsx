import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../components/layout/TopAppBar/DropDown";
import {
  getDirInfo,
  setSelectedDir,
} from "../redux/actions/dirDropdownActions";

type WowDirState = {
  wowRootDir: string;
  wowVerDirList: Array<object>;
  wowSelectedDir: string;
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
    if (wowVerDirList.length === 0) {
      const regPath =
        "HKLM\\SOFTWARE\\WOW6432Node\\Blizzard Entertainment\\World of Warcraft";
      dispatch(getDirInfo(regPath));
    }
  }, [dispatch]);

  const { loading, wowVerDirList, error, wowSelectedDir } = useSelector(
    (state: WowDirState) => ({
      ...state.WowDirReducer,
    })
  );

  const handleSelectChange = (event: React.ChangeEvent<{ value: string }>) => {
    const val = event.target.value;
    dispatch(setSelectedDir(val));
  };

  return (
    <>
      <DropDown
        loading={loading}
        dirList={wowVerDirList}
        error={error}
        handleSelectChange={handleSelectChange}
        selectValue={wowSelectedDir}
      />
    </>
  );
};

export default DropDownWithData;
