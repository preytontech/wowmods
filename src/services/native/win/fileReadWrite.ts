const { readdir, rmdir } = window.require("fs").promises;
const { statSync, existsSync } = window.require("fs");
const { join } = window.require("path");

export const getAllDirs = async (path) => {
  let dirs: any[] = [];
  for (const file of await readdir(path)) {
    let cleanName = file.replace(/_/g, "");
    cleanName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
    const f = path + "/" + file;

    const dirInfo = statSync(f);
    //Currently every version of the game has a BlizzardError.exe in the folder so check to see if the folder is a game folder
    //We should run a wildcard check for wow*.exe
    if (dirInfo.isDirectory() && existsSync(f + "/BlizzardError.exe")) {
      if (file === "_retail_") {
        dirs.push({ name: "Retail", path: f });
      } else if (file === "_classic_") {
        dirs.push({ name: "Classic", path: f });
      } else if (file === "_beta_") {
        dirs.push({ name: "Beta", path: f });
      } else {
        dirs.push({ name: cleanName, path: f });
      }
    }
  }
  return dirs;
};

const deleteFolderRecursive = async (path: string) => {
  rmdir(path, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
      return false;
    }
    return true;
  });
};
