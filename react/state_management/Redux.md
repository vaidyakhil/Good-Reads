## GoodReads

* [Great Read: Understanding Redux internals by Mark Erikson](https://blog.isquaredsoftware.com/2018/11/react-redux-history-implementation/#development-history-of-the-react-redux-api)
* [How React-Redux Behaves Differently Then Context](https://blog.isquaredsoftware.com/2020/01/blogged-answers-react-redux-and-context-behavior/)
* [Why context is not state-management solution and how it differs from react-redux](https://blog.isquaredsoftware.com/2020/01/blogged-answers-react-redux-and-context-behavior/)


## Notes

### Mental Model for Redux
* I used to think a lot how redux( or any state management lib for that matter) is able to notify just the react component,that needs the particular update.

* Is there some kind of event emitter logic that JS provides and these libs are using.

* `Great Read: Understanding Redux internals by Mark Erikson` article at the top clarifies a lot,
	* how redux maintains a list of listeners and notifies **all of them** whenever an action is dispatched. 
	* how `connect` HOC from `react-redux` abstracts out, subscription, unsubscription to store, and triggering re-render logic from React Components.
	* Specifically the simplified implementation of `createStore` and `connect` are very helpful for a mental model

* React-Redux uses Context to pass down the instance of store (not just the value of the JSON data), to make it accessible to all the component down the react tree.
* It is used for DI rather than holding on to the actual state.

* RTK reduces the boiler plate code of defining action creators, reducers separately, manually ensuring state updates done in immutable way, easy store initialization etc.. keeping typescript's type-safety in mind

### Miniature Version of useSelector implementation
```js
function useSelector(selector) {
    const [, forceRender] = useReducer( counter => counter + 1, 0);
    const {store} = useContext(ReactReduxContext);
        
    const selectedValueRef = useRef(selector(store.getState()));

    useLayoutEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const storeState = store.getState();
            const latestSelectedValue = selector(storeState);

            if(latestSelectedValue !== selectedValueRef.current) {
                 selectedValueRef.current = latestSelectedValue;
                 forceRender();
            }
        })
        
        return unsubscribe;
    }, [store])

    return selectedValueRef.current;
}

```
