## GoodReads
- [Integrating RN with android](https://medium.com/@soumyasethy/integrating-react-native-with-existing-android-apps-efficiently-3b39f2e061bd)

- [GREAT ARTICLE -> Engine / Javascript Environment ](https://www.reactnative.guide/3-react-native-internals/3.1-react-native-internals.html)

- [bridging, native modules, android/ios](https://www.netguru.com/blog/bridging-native-ui-components-in-the-react-native)

- [React native architecture, current and new, Parshuram - maintainer](https://www.youtube.com/watch?v=5sQw8C36Xa4&t=977s)

- [React native architecture, current and new, Parshuram - maintainer](https://www.youtube.com/watch?v=UcqRXTriUVI&t=1550s)

- [Native Views, android](https://reactnative.dev/docs/native-components-android)

- [Native Modules](https://reactnative.dev/docs/native-modules-intro) and [Android specific](https://reactnative.dev/docs/native-modules-android)

- [Native Modules, bridge, 2 way communication](https://levelup.gitconnected.com/react-native-events-in-gory-details-what-happens-on-the-way-to-listeners-2cee6c55940c)

- [GREAT SERIES -> animations in RN, eveningKid](https://www.youtube.com/watch?v=TyZtrS0_bi0&list=PLiVL41zTt2lIIdZvWBwzoCjOb84DKtOX6)

- [GREAT ARTICLE -> animations in RN, eveningKid](https://eveningkid.medium.com/interpolation-with-react-native-animations-853e467fe5c1)

- [Animations, reanimated-2](https://formidable.com/blog/2021/reanimated-two/)

- [flatlist, optimizations, performance](https://codingislove.com/optimize-react-native-flatlist-performance/)


## Notes

### How it works
* First we need to register our RN App/Component using the AppRegistry API:
	```
	AppRegistry.registerComponent("Vaults", () => App);
	```
* 	React Native will use JavaScriptCore, the JavaScript engine that powers Safari
* 	when we hit react-native run-android:
* React Native CLI would spawn a node packager/bundler
* that would bundle the JS code into a single main.bundle.js file. 
* The packager can be considered as being similar to Webpack.

* When app lauches at the first entry point, 
	* The Native thread spawns the JS VM thread which runs the bundled JS code.
	* The JS code has all the business logic of the application.

* Now these threads start to communicate via the infamous RN bridge.

* There are mainly 3 threads that are spawned in a RN application:
	* Main / UI thread: all ui refreshes and event capturing work on this one
	* JS Thread: buisness logic
	* Shadow node thread: This is thread which does all the calculations where to render a view what size etc from the data sent from JS thread
* After calculating it conveys it to the Main thread.  ref (`.res/rn_old_arch` )


### New Architecture (`.res/rn_new_architecture`)

* JSI, Turbo Modules, Fabric, CodeGen, and a lot less of bridge

* This will be the standardized way of exposing native modules to JS as JS objects.

* Turbo modules, basically will expose  a getter to every Native modules to a global object, and it will allow loading boot modules and custom native modules to be loaded lazily

* Fabric will be the new UI system and will be exposed through JSI as well

* CodeGen will be a tool to generate the cpp code or the binding to the native module with the counterpart JS module
* MyCustomModule.Java -* (MyCustomModule.cpp) -* MyCustomModule.js

* So the JSI will allow to call the native modules directly and not communicate through the RN bridge, 
  now its the native module's nature to return a promise or a value.


### RN's Architecture Components

* Hermes is an open-source JavaScript engine optimized for React Native.
* For many apps, enabling Hermes will result in improved start-up time, decreased memory usage, and smaller app size
* Developed by facebook only.
* Auto linking allows to add JS libraries to your project that also have their platform specific conunterparts without going into the java or swift code.
* In android, you enable auto linking by adding a script provided by react=native cli and enabling it.

***
**Also Go through React.md for other notes and good reads**
***
