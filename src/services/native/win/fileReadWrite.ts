const { readdir, stat, rmdir } = window.require("fs").promises;
const { join } = window.require("path");

export const getAllDirs = async (path) => {
  let dirs: any[] = [];
  for (const file of await readdir(path)) {
    dirs = [...dirs, file];
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
