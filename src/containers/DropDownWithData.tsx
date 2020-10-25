import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../components/layout/TopAppBar/DropDown";
import { setSelectedDir } from "../redux/actions/dirDropdownActions";

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
