import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import DropDown from "../components/layout/TopAppBar/DropDown";
import {
  getPathFromRegistry,
  setSelectedDir,
} from "../redux/actions/dirDropdownActions";
import { IWowDirState } from "../redux/reducers/dirReducer";

type DirState = {
  WowDirReducer: IWowDirState;
};
const DropDownWithData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const regPath =
      "HKLM\\SOFTWARE\\WOW6432Node\\Blizzard Entertainment\\World of Warcraft";
    dispatch(getPathFromRegistry(regPath));
  }, []);

  const { loading, wowVerDirList, error, wowSelectedDir } = useSelector(
    (state: DirState) => ({
      ...state.WowDirReducer,
    })
  );

  const handleSelectChange = (event: React.ChangeEvent<{ value: string }>) => {
    const val = event.target.value;
    dispatch(setSelectedDir(val));
  };

  return (
    <>
      <Redirect to="/" />
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
