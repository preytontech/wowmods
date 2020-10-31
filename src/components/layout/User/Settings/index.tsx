import React from "react";
import { START_MINIMIZED_PREFERENCE_KEY } from "../../../../definitions/constants";
import { PreferenceStorage } from "../../../../services/PreferenceStorage";
import LocateInstallButton from "../../../LocateInstallButton";

export default function userSettings() {
  console.log(PreferenceStorage.get(START_MINIMIZED_PREFERENCE_KEY));
  return (
    <>
      <h4 style={{ color: "white" }}>
        Locate game installation <LocateInstallButton />
      </h4>
      <h4 style={{ color: "white" }}>
        Detected World of Warcraft Installs....
      </h4>
    </>
  );
}
