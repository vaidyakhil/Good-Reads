## GoodReads

* [Great Read: Understanding Redux internals by Mark Erikson](https://blog.isquaredsoftware.com/2018/11/react-redux-history-implementation/#development-history-of-the-react-redux-api)


## Notes

### Mental Model for Redux
* I used to think a lot how redux( or any state management lib for that matter) is able to notify just the react component,that needs the particular update.

* Is there some kind of event emitter logic that JS provides and these libs are using.

* `Great Read: Understanding Redux internals by Mark Erikson` article at the top clarifies a lot,
	* how redux maintains a list of listeners and notifies **all of them** whenever an action is dispatched. 
	* how `connect` HOC from `react-redux` abstracts out, subscription, unsubscription to store, and triggering re-render logic from React Components.
	* Specifically the simplified implementation of 		`createStore` and `connect` are very helpful for a mental model
