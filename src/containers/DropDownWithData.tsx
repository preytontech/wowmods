import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import DropDown from "../components/layout/TopAppBar/DropDown";
import {
  getPathFromRegistry,
  setSelectedDir,
} from "../redux/actions/dirDropdownActions";
import { IWowDirState } from "../redux/reducers/dirReducer";

type DirState = {
  WowDirReducer: IWowDirState;
};
type RouteProps = RouteComponentProps;
const Drop = (Props: RouteProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    Props.history.push("/");
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
const DropDownWithData = withRouter(Drop);

export default DropDownWithData;
