## GoodReads
- [Use of frameworks vs vannila JS, Html, CSS and what makes up the choice](https://stackoverflow.blog/2020/02/03/is-it-time-for-a-front-end-framework/)

- [Pretty good series, covers everything react, separated with class/functional components](https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3)

- [Flexbox, css, styling, cheatsheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- [article for how rendering works in browsers](https://medium.com/technogise/dom-manipulation-in-browser-59b793bee559)
- [THIS ARTICLE IS GOLD -> React being faster, virtual dom, re render, batching updates](https://stackoverflow.com/a/61272492/7930262)

- [HOCs can be used to abstract out duplication in components](https://reactjs.org/docs/higher-order-components.html)

- [HOCs are basically javascript closures, so I feel its more of a JS feature than React](https://www.youtube.com/watch?v=rsBQj6X7UK8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=34)

- [React or react-native do not actually require Node](https://stackoverflow.com/a/41839733/7930262)

- [React call methods on child component, rare requirement, anti pattern](https://medium.com/@nugen/react-hooks-calling-child-component-function-from-parent-component-4ea249d00740) and [when to use useImperitiveHandler](https://stackoverflow.com/questions/57005663/when-to-use-useimperativehandle-uselayouteffect-and-usedebugvalue)

- [Webpack and babel, why used](https://www.reddit.com/r/reactjs/comments/aw5qmn/are_babel_and_webpack_necessary_for_react/?utm_source=share&utm_medium=web2x&context=3)

- [POC: how React Hooks work under the hood](https://indepth.dev/posts/1220/under-the-hood-of-react-hooks) 

- [React CodeBase Walkthrough series](https://dev.to/fromaline/deep-dive-into-react-codebase-ep1-prerequisites-33ak)

- [why react was born, intereting talk, Tom Occhino, react.js conf](https://www.youtube.com/watch?v=KVZ-P-ZI6W4&t=89s)

* [Great Read: Understanding Redux internals by Mark Erikson](https://blog.isquaredsoftware.com/2018/11/react-redux-history-implementation/#development-history-of-the-react-redux-api)

## Notes

### React being faster (analysis)
* Conclusion of why react is "faster" is as follows:
	1.	Point is react is eventually a framework that abstracts dev from direct manipulation of DOM, so inherently it must 
		be using the same APIs that browser provides. So if "react" is able to make differential changes, browser must be able to too, if react is able to batch updates, browser must be too.
	2. 	React is not inherently faster, eventually it also uses the same DOM APIs to update the dom. 
		It just do that in an efficient manner that we can do on our own as well using vanilla JS.
		The point being this framework standardizes the DOM update process by this "effiecient manner".
		So that the responsibility ofUpdate this ^^ does not rest with developer.
		One example of "efficient manner" is the batching of updates to DOM, so that instead of multiple render cycles of DOM (that involve repainting and reflow), updates are done in single instance.

	3. 	The virtual DOM is helpful in calculating the diff, (substantially, because eventually it is just a tree data
		structure of plain javascript objects rather than a DOM tree).
		So everytime something changes, react "re-renders" the V-DOM (and not the actual DOM) then compares the with previous V-DOM (diffing) and based on the diffs, batches the DOM updates and sends to browser.

### Rendering list in React

* "key" property while rendering list items is recommended as it allows react to understand what has changed and what it can keep, for eg:
```jsx

<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

// changing above snippet to the snippet below
// react will conclude that first element has changed, second has changed and a new one is added at the end (roughly)
// rather than understanding that it can keep 1st two and add a new one at the top

<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

// instead use this way
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

/*
* notice that we are not using map and index with it to render list.
* so its not the consecutive ids but the indexs of the array that might cause problem
/*
```

* **keeping indexes as "key" is not adviced when the items may be reordered, since when the items will be reordered, their respective ids would also change and react won't calculate the diff properly**.

* JSX is html like syntax that React uses to inject html like syntax into your react component.
* We can choose simply not to use JSX at all and use React.createElement to create instance of component or rather use the beautifull html like declarative syntax to return nested components
"It is a declarative syntax used to express a tree structure of UI components."

### Component Lifecycle
* Lifecycle phases of react components: mounting, updating, unmounting, error handing
* In MOUNTING PHASE, following methods can be overriden to hook into lc:
	* constructor: initialize state, bind event handlers (do not perform side effects)
	* static getDerivedStateFromProps: rarely used,
	* render: renders the nested component, from here children's lifecycle start
	* componentDidMount: mounting completed -* perform side effects here

* In Update phase:
	* shouldComponentUpdate: implement custom comparions based on which component re renders
	* componentDidUpdate: update complete ->perform side effects

* Pure components: are components which implement "shouldCompoonentUpdate" which shallow compares the prevProp, nextProps and states
 and if they differ, only then re-renders.

* For functional components, we can use React.memo and wrap our component with it, to do the same, if its props are changing only then re render it.
[codesandbox for React.memo](https://codesandbox.io/s/react-passing-functions-as-props-pwrfz6?file=/src/App.js)

* useRef can be used to 
	* have direct ref to DOM nodes
	* to get a container for value that should not re-render component on change 
and also persist value through subsequent re renders.

* useEffect: the callback returned from the fn passed as firstParam is not called on first render, however on subsequent run of effect it is called every time before the main function is called, it is a clean up fn, cleans up prev effect first.

* We cannot pass an async fn, into useEffect as, the param is expected to either return a cleanup fn or NOTHING, but async fn(s) implicitly return a promise.
* To work around this, we can define an async fn inside first param and call it in use effect. that fn can use await, and set the state after receiving response

### React Context API
* React Context provides a way to avoid prop drilling, i.e passing props deep down the heirarchy. Context is similar to a global object + react powers, whenever it changes components below it rerender.

* There can be multiple context providers, a provider allows all the components below it to access what it has to provide.

* For Context, we need to wrap the providing component with YourContext.Provider with value prop as what u want to share across

* for using context value, useContext(yourContext) can be used in children components.

### HOCs
* HOCs, higher order components, are functions which take a component as a paramenter, and anything else required and return a wrapper component (not an instance, its like return a FC or a class, SO HOCS are basically pure functions) they return components which wrap around passed component and develop additional capabilities.
* HOCs can be used to abstract out duplication in components.
* HOCs are basically javascript closures, so I feel its more of a JS feature than React.


### Other Components of React's Architecture

* React or react-native do not actually require Node, [link](https://stackoverflow.com/a/41839733/7930262)
* your whole application can be served as a js script from a cdn, in a html page,
* but the benfits node offers: use of bundlers such as web-pack,
* use of transpilers making use of jsx possible, etc.. far outweigh the option of not using Node.
* Code written in React can coexist peacefully with markup rendered on the server by something like PHP, or with other client-side libraries. In fact, this is exactly how React is being used at Facebook.

### Build Tools

* Babel is a transpiler, it transforms your ES6 js code into the versions compatible with old browsers.
* It also is important to use Babel in order to use JSX, as Babel is the one converting it to JS code.
* Babel works in form of plugins and presets, you include specific plugins that 
  transpile specific syntax you want into the old compatible js version
	```
	npm i @babel/core @babel/preset-env @babel/preset-react  	
	```

* webpack is a bundler, which allows us to write clean maintainable modular code 
  and still serve the client with a single (maybe multiple) bundle file.


### Mental Model for Redux
* I used to think a lot how redux( or any state management lib for that matter) is able to notify just the react component,that needs the particular update.

* Is there some kind of event emitter logic that JS provides and these libs are using.

* `Great Read: Understanding Redux internals by Mark Erikson` article at the top clarifies a lot,
	* how redux maintains a list of listeners and notifies **all of them** whenever an action is dispatched. 
	* how `connect` HOC from `react-redux` abstracts out, subscription, unsubscription to store, and triggering re-render logic from React Components.
	* Specifically the simplified implementation of 		`createStore` and `connect` are very helpful for a mental model
