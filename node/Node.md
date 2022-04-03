## GoodReads

* [introduction, description](https://www.youtube.com/watch?v=yEHCfRWz-EI)
* [Peer dependencies](https://indepth.dev/posts/1187/npm-peer-dependencies)
* [dependencies and dev-dependencies](https://withblue.ink/2020/06/07/is-this-a-dependency-or-devdependency.html)

## Notes

### Overview
* Initially JS was something that **could be ran into browsers** to make websites more interactive, thats all.
* "Spider Monkey" was the engine that interpreted JS and made it something browsers could understand.
* Then came V8 engine with chromium based browsers, which later google open-sourced.
* Someone successfully took V8 out of the browser and exposed C++ APIs to V8 to make system calls.
* This enviromnent is called NodeJs, it exposes C++ APIs to V8 engine to make system calls, eventually allowing JS to run on physical machines.



### NPM and NPX
* npm the package manager for node comes with it and with it comes another command line utility npx.
* npx lets u execute packages without installations (the package should be part of npm pacakges).
* the convinient command to setup a bare bone react app: `npx create-react-app <app-name>` is a good example for the use case, it create a bare bone project and installs minm required dependancies like react, react-dom etc..