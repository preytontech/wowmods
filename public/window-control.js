window.addEventListener("DOMContentLoaded", () => {
  const minimizeButton = document.getElementById("minimize-btn");
  const closeButton = document.getElementById("close-btn");

  minimizeButton.addEventListener("click", (e) => {
    const { BrowserWindow } = require("@electron/remote");
    BrowserWindow.getFocusedWindow().minimize();
  });

  closeButton.addEventListener("click", (e) => {
    window.close();
  });
});
