import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../components/layout/TopAppBar/DropDown";
import { setSelectedDir } from "../redux/actions/dirDropdownActions";
import { IWowDirState } from "../redux/reducers/dirReducer";

type DirState = {
  WowDirReducer: IWowDirState;
};

const DropDownWithData = () => {
  const dispatch = useDispatch();

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

export default DropDownWithData;
