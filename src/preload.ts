// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

const assetRoot = ipcRenderer.sendSync('get-asset-root')
contextBridge.exposeInMainWorld("assetRoot", assetRoot);

// Extend global declaration of window
declare global {
  interface Window {
    assetRoot: string,
  }
}