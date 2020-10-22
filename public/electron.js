const path = require("path");

const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const { autoUpdater } = require("electron-updater");

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
    enableRemoteModule: true,
  });
  splash.loadURL(`file://${__dirname}/splash.html`);

  //Check for updates, download and install in BG for next launch
  autoUpdater.checkForUpdatesAndNotify();
  //TODO: Check for updates and start install. Need to use the commands below to monitor the progress & display status on splash
  //autoUpdater.checkForUpdates();

  //Setup Main Window
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

// function sendStatusToWindow(text) {
//   log.info(text);
//   win.webContents.send("message", text);
// }
// autoUpdater.on("checking-for-update", () => {
//   sendStatusToWindow("Checking for update...");
// });
// autoUpdater.on("update-available", (info) => {
//   sendStatusToWindow("Update available.");
// });
// autoUpdater.on("update-not-available", (info) => {
//   sendStatusToWindow("Update not available.");
// });
// autoUpdater.on("error", (err) => {
//   sendStatusToWindow("Error in auto-updater. " + err);
// });
// autoUpdater.on("download-progress", (progressObj) => {
//   let log_message = "Download speed: " + progressObj.bytesPerSecond;
//   log_message = log_message + " - Downloaded " + progressObj.percent + "%";
//   log_message =
//     log_message +
//     " (" +
//     progressObj.transferred +
//     "/" +
//     progressObj.total +
//     ")";
//   sendStatusToWindow(log_message);
// });
// autoUpdater.on("update-downloaded", (info) => {
//   sendStatusToWindow("Update downloaded");
// });
