# Getting Started React + Typescript + Electron Guide

This is the easiest and fastest way to obtain with minimal configuration and minimal extra files a nice working example of using
Electron + Typescript + React.

# To Get Started using React and Electron out of the box in an easy and friendly manner:

```sh
npm init electron-app@latest <app-name> -- --template=webpack-typescript # Start electron forge with typescript and webpack
npm install --save-dev react @types/react react-dom @types/react-dom # Install react
```

Typescript has out of the box support syntax for TSX.
So we specify: `jsx: "react"` in compiler options, and thats all.
So all we need is to add react.

As an example of how to add:

Add to renderer process reactDOM and render:

```tsx
const node = document.querySelector("#react-entry-point")
if (node === null)
  throw new Error("Unable to find react mountpoint");
const root = createRoot(node);

root.render(
  <React.StrictMode>
    <div>
      hello
    </div>
  </React.StrictMode>
)
```

Ensure in the HTML there's a mountpoint to use:

```html
<div id="react-entry-point"></div>
```

Aaaand that's it. It should work out of the box. Quite fun actually.

`electron-forge` does the heavy-lifting.
So we can do:

```sh
npm start # development real-time server
npm run package # makes folder. self-contained, but cannot pack into single executable.
npm run make # makes installer, single executable, but ofc, not actually single packed, just unpacks and then runs.
```


## Ensure React prod

Finally just to ensure react prod is being done properly. Add the prod/dev flag to webpack config.
This might not be necessary but better safe than sorry:

```json
mode: process.env.NODE_ENV === "development" ? "development" : "production"
```

(In both the webpack.main.config and the renderer one!)

## Final Notes.

This is probably not having all full optimizations that we may want.
This is intended for smaller projects with less complicated stuff and maybe not so optimized.
For a full blown optimized solution, just take the highly maintained boilerplate code at:

https://github.com/electron-react-boilerplate/electron-react-boilerplate