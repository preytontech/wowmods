import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPathFromRegistry } from "../../../redux/actions/dirDropdownActions";
import LocateInstallButton from "../../LocateInstallButton";

export default function InitializeApp() {
  const dispatch = useDispatch();

  //this function runs only on the first load and fetches rootpath from registry
  //and uses that path to search for wow install dirs
  useEffect(() => {
    const regPath =
      "HKLM\\SOFTWARE\\WOW6432Node\\Blizzard Entertainment\\World of Warcraft";
    dispatch(getPathFromRegistry(regPath));
  }, [dispatch]);

  return (
    <>
      <h4>
        Here we will search for wow paths and build our inital wow install
        listing
      </h4>
      <LocateInstallButton />
    </>
  );
}
