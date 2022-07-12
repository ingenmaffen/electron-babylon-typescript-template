# Electron & Babylon.js Template (with TypeScript)

## Description

The 2 main pillars of this template are Electron (as a desktop environment) and Babylon.js (as the 3D engine) with some TypeScript sprinkled in.

## Project setup

In the end Electron uses JavaScript so both the Electron and Babylon.js code had to be compiled to JavaScript. To achieve this, I used 2 different tsconfig files:

- tsconfig.json: this is the one that takes care of the Electron-related code by compiling the main.ts file to main.js (under the out/electron directory), which is the entry point of the Electron app
- tsconfig.webpack.json: this file is used in tandem with webpack (and the webpack.config.js file), so that the game.ts file is compiled in a way that can be included in the index.html file; and by using webpack it is possible to compile all game-related code into one file, so it's enough to include only this (game.js) file

The other files are:

- index.html is the file that is loaded into the Electron application and it takes care of loading the game.js file (which is the Babylon.js code compiled)
- game.ts is the Babylon.js code
- main.ts sets up the Electron app (and loads index.html)

## Usage

The first step is to run

```bash
npm install
```

to install the dependencies. After that, you can run

- `npm start` to build and run the application
- `npm run watch` to run the applicaton in a way that it watches changes in the Babylon-related files
- `npm run build` to build the application

### Sidenote

The `npm run watch` command only watches changes on the Babylon.js files, so if you plan to develop an Electron-heavy app, you might want to add `nodemon` as well.
