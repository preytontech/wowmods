const { readdir, stat, rmdir } = window.require("fs").promises;
const { join } = window.require("path");

export const getAllDirs = async (path) => {
  let dirs: any[] = [];
  for (const file of await readdir(path)) {
    const f = path + "/" + file;
    if (file === "_retail_") {
      dirs.push({ name: "Beta", path: f });
    }
    if (file === "_classic_") {
      dirs.push({ name: "Beta", path: f });
    }
    if (file === "_beta_") {
      dirs.push({ name: "Beta", path: f });
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
