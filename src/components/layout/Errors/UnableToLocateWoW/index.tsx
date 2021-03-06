import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { lookupRootDir } from "../../../../redux/actions/dirDropdownActions";
const { dialog } = window.require("electron").remote;

export default function UnableToLocateWoW() {
  const dispatch = useDispatch();
  
  const handleAddDir = async () => {
    var path = await dialog.showOpenDialog({
      properties: ["openDirectory"],
    });
    dispatch(lookupRootDir(path.filePaths[0].toString()));
  };

  return (
    <>
      Unable to locate WoW installation please manually select your install
      folder
      <br />
      <Button onClick={handleAddDir} color="primary" size="small">
        lookup
      </Button>
    </>
  );
}
