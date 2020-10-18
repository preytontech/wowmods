const { readdir, stat, rmdir } = window.require("fs").promises;
const { join } = window.require("path");

export const getAllDirs = async (path) => {
  let dirs: any[] = [];
  for (const file of await readdir(path)) {
    if (file === "_retail_" || file === "_classic_") {
      const f = path + "/" + file + "/Interface/AddOns";
      dirs = [...dirs, f];
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
