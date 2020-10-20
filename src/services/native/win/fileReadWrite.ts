const { readdir, rmdir } = window.require("fs").promises;
const { statSync, existsSync, readdirSync } = window.require("fs");
const execSync = window.require("child_process").execSync;
const { join } = window.require("path");

export const getAllDirs = async (path:string) => {
  let dirs: any[] = [];
  for (const file of await readdir(path)) {
    let cleanName = file.replace(/_/g, "");
    cleanName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
    const f:string = path + "/" + file;

    const dirInfo = statSync(f);
    //Currently every version of the game has a BlizzardError.exe in the folder so check to see if the folder is a game folder
    //We should run a wildcard check for wow*.exe//
    if (dirInfo.isDirectory() && existsSync(f + "/BlizzardError.exe")) {
      if (file === "_retail_") {
        let wowExe = findWowExe(f);
        let path = f + "/" + wowExe;
        let version = "";
        if (existsSync(path)) {
          let queryPath = path.split("/").join("\\\\");
          version = getExeVersion(queryPath);
        }
        dirs.push({ name: "Retail", path: f, version });
      } else if (file === "_classic_") {
        let wowExe = findWowExe(f);
        let path = f + "/" + wowExe;
        let version = "";
        if (existsSync(path)) {
          let queryPath = path.split("/").join("\\\\");
          version = getExeVersion(queryPath);
        }
        dirs.push({ name: "Classic", path: f, version });
      } else if (file === "_beta_") {
        let wowExe = findWowExe(f);
        let path = f + "/" + wowExe;
        let version = "";
        if (existsSync(path)) {
          let queryPath = path.split("/").join("\\\\");
          version = getExeVersion(queryPath);
        }
        dirs.push({ name: "Beta", path: f, version });
      } else {
        dirs.push({ name: cleanName, path: f });
      }
    }
  }
  return dirs;
};
const findWowExe = (f:string) => {
  let files = readdirSync(f);
  for (let i = 0; i < files.length; i++) {
    if (
      files[i].substring(0, 3) === "wow" &&
      files[i].substring(files[i].length - 4) === ".exe"
    ) {
      return files[i];
    }
  }
  return false;
};

const getExeVersion = (path:string) => {
  let app = `wmic datafile where name="${path}" get version /value`;
  let child = execSync(app).toString();
  if (child) {
    child = child.split("=")[1].trim();
  }
  return child;
};
const deleteFolderRecursive = async (path: string) => {
  rmdir(path, { recursive: true }, (err:string) => {
    if (err) {
      console.error(err);
      return false;
    }
    return true;
  });
};
