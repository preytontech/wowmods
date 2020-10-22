const path = require("path");

const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

// Handle creating/removing shortcuts on Windows when installing/uninstalling
if (require("electron-squirrel-startup")) {
  app.quit();
}

let splash;
let mainWindow;
require("@electron/remote/main").initialize();

app.on("ready", () => {
  // create main browser window
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 600,
    minHeight: 520,
    minWidth: 900,
    show: false,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });
  // create a new `splash`-Window
  splash = new BrowserWindow({
    width: 445,
    height: 250,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    resizable: false,
    enableRemoteModule: true
  });
  splash.loadURL(`file://${__dirname}/splash.html`);

  mainWindow.setMenu(null);
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  // if main window is ready to show, then destroy the splash window and show up the main window
  mainWindow.once("ready-to-show", () => {
    // Open the DevTools.
    if (isDev) {
      mainWindow.webContents.openDevTools({ mode: "detach" });
    }
    splash.destroy();
    mainWindow.show();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
