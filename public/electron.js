const {
  app,
  BrowserWindow,
  Menu,
  nativeImage,
  screen,
  Tray,
} = require("electron");
const log = require("electron-log");
const Store = require("electron-store");
const path = require("path");
const constants = require("../src/definitions/constants");
const isDev = require("electron-is-dev");
const { autoUpdater } = require("electron-updater");
const isMac = process.platform === "darwin";
const isWin = process.platform === "win32";
const preferenceStore = new Store({
  name: "preferences",
  defaults: {
    start_minimized: false,
    collapse_to_tray: true,
  },
});
let splash;
let mainWindow;
let tray;
let appIsQuitting = false;

// Handle creating/removing shortcuts on Windows when installing/uninstalling
if (require("electron-squirrel-startup")) {
  app.quit();
}

function createTray() {
  const icon = nativeImage
    .createFromPath(path.join(__dirname, "logo192.png"))
    .resize({ width: 16 });

  tray = new Tray(icon);
  const contextMenu = Menu.buildFromTemplate([
    { label: app.name, type: "normal", icon: icon, enabled: false },
    {
      label: "Show",
      click: () => {
        mainWindow.show();

        if (isMac) {
          app.dock.show();
        }
      },
    },
    { role: "quit", label: "Quit" },
  ]);

  if (isWin) {
    tray.on("click", () => {
      mainWindow.show();
    });
  }

  tray.setToolTip("WoWMods.app");
  tray.setContextMenu(contextMenu);
}

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
    webPreferences: {
      enableRemoteModule: true,
    },
  });
  splash.loadURL(`file://${__dirname}/splash.html`);
  createTray();

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
    if (
      preferenceStore.get(constants.START_MINIMIZED_PREFERENCE_KEY) === false
    ) {
      mainWindow.show();
    }
  });

  mainWindow.on("minimize", function (event) {
    event.preventDefault();
    mainWindow.hide();
  });

  if (isMac) {
    mainWindow.on("close", (e) => {
      if (appIsQuitting) {
        return;
      }

      e.preventDefault();
      mainWindow.hide();

      if (
        preferenceStore.get(constants.COLLAPSE_TO_TRAY_PREFERENCE_KEY) ===
        "true"
      ) {
        app.dock.hide();
      }
    });
  }
});

app.on("before-quit", () => {
  appIsQuitting = true;
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
