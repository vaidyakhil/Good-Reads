  

## GoodReads

  

  

* [introduction, description](https://www.youtube.com/watch?v=yEHCfRWz-EI)

  

* [Peer dependencies](https://indepth.dev/posts/1187/npm-peer-dependencies)

  

* [dependencies and dev-dependencies](https://withblue.ink/2020/06/07/is-this-a-dependency-or-devdependency.html)

  

* [how conflicting dependencies are resolved]('https://dev.to/shree_j/how-npm-works-internally-4012')

  

  

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

  

  

### Dependencies and `node_modules`

  

* When we install a package, package managers install the deps of that package directly into our project's `node_modules`.

  

* Incase though we install a second package which has some common dep at different version than one currently installed one, those deps would be moved to separate node_modules of `package 1` and `package 2`

  

>*"All the dependencies and the internal dependencies tries to get a place in the root of the node_modules unless there is a conflict with the same dependency, but different version. When a conflict raises, it creates a sub node_modules under each dependency needed and pushes conflicting internal libraries in it"*

  

### Deps and Peer Deps

* Peer Dependencies express compatibility. For example, you will want to be specific about which version of Angular your library is compatible with.

The Guidelines

* Favor using Peer Dependencies when one of the following is true:
	* Having multiple copies of a package would cause conflicts
	* **The dependency is visible in your interface**
	* You want the developer to decide which version to install

By adding a package in `peerDependencies` you are saying:

-   My code is compatible with this version of the package.
-   If this package already exists in **node_modules**, do nothing.
-   If this package doesn’t already exist in the **node_modules** directory or it is the wrong version, **don’t add it. But, show a warning to the user that it wasn’t found**.
