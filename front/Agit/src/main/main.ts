import { app, BrowserWindow } from "electron";
import path from "path";

let mainWindow: BrowserWindow | null = null;

console.error("__dirname : ", __dirname);

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
    },
  });

  const devServerURL = "http://localhost:8080"; // React 개발 서버

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL(devServerURL).catch((err) => {
      console.error("Failed to load React app:", err);
    });
  } else {
    mainWindow.loadFile(path.join(__dirname, "index.html"));
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
