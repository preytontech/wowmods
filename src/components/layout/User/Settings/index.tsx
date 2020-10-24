import React from "react";
import LocateInstallButton from "../../../LocateInstallButton";

export default function userSettings() {
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
