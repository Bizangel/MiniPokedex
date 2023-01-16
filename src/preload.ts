// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// import React from 'react';
// import { createRoot } from 'react-dom/client';

// preload.js

// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
// window.addEventListener('DOMContentLoaded', () => {
//   const replaceText = (selector: string, text: string | undefined) => {
//     if (text) {
//       const element = document.getElementById(selector)
//       if (element) element.innerText = text
//     }
//   }

//   for (const dependency of ['chrome', 'node', 'electron']) {
//     replaceText(`${dependency}-version`, process.versions[dependency])
//   }

//   // add react component
//   const node = document.querySelector("#react-entry-point")
//   if (node === null)
//     throw new Error("Unable to find react mountpoint");
//   const root = createRoot(node);
//   root.render(
//     <React.StrictMode>
//       <div>
//         hello
//       </div>
//     </React.StrictMode>
//   )
// })
