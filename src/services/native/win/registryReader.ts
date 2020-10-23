import path from "path";

let regedit = window.require("regedit");
const vbsDirectory = path.join(
  path.dirname(window.require("electron").remote.app.getPath("exe")),
  "./resources/regedit/vbs"
);
regedit.setExternalVBSLocation(vbsDirectory);

export const readRegistry = (key: string) => {
  return new Promise((resolve, reject) => {
    regedit
      .list(key)
      .on("data", function (entry) {
        resolve(entry.data);
      })
      .on("error", function () {
        reject("error");
      });
  });
};
