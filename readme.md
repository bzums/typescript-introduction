# A short introduction to TypeScript

A presentation and a few simple code examples to support first steps in [TypeScript](https://www.typescriptlang.org/).

## Setup and run project

* `npm i` to install dependencies
* `npm run lint` to lint your code
* `npm run build` to compile the TypeScript code into `build/`
* `npm run build:watch` for watching and continiously building the code
* `npn run start` to run `build/index.js` and watch for changes

### Debug

Using VSCode you can just go to the "Debug" tab and launch the configuration "Launch Programm" to debug your code. Keep in mind that the entry point is `src/index.ts`, so everything you want to debug must be called from there in some way. Also, be sure to set a breakpoint before starting to debug since the programm will exit immediately otherwise (since it is not a long-running task like a server).

## Presentation

* [http://bzums.rasalhague.uberspace.de/slides/typescript-introduction/](http://bzums.rasalhague.uberspace.de/slides/typescript-introduction/)
* or serve yourself: `npm run serve` to provide the slides on `localhost:8080/`
* type `p` to toggle presenter mode with additional notes
