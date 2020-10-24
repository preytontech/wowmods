import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { lookupRootDir } from "../../redux/actions/dirDropdownActions";
const { dialog } = window.require("electron").remote;

export default function LocateInstallButton() {
  const dispatch = useDispatch();

  const handleAddDir = async () => {
    var path = await dialog.showOpenDialog({
      properties: ["openDirectory"],
    });
    dispatch(lookupRootDir(path.filePaths[0].toString()));
  };

  return (
    <>
      <Button onClick={handleAddDir} color="primary" size="small">
        Locate WoW Folder
      </Button>
    </>
  );
}
