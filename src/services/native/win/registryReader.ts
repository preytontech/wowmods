var regedit = window.require("regedit");

export const readRegistry = (key: string) => {
  return new Promise((resolve, reject) => {

    regedit
      .list(key)
      .on("data", function (entry) {
        resolve(entry.data)
      })
      .on("error", function () {
        reject("error")
      });
  })
};
