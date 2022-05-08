## GoodReads

- [namaste js, great series](https://www.youtube.com/watch?v=pN6jk0uUrD8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP)


## Notes
* functions are higher order entities, can be passed around as args, stored in vars etc..

* for ..of loop 
	```javascript
	for (const currentValue of a) {
	  // Do something with currentValue
	}
	```

* for ..in loop (NOT RECOMMENDED AS IT LOOPS THROUGH PROTOTYPE'S PROPERTIES)
	```javascript
	for (const curIndex in a) {
	  // Do something with currentValue
	}
	```

* functions have access to an additional variable inside their body called arguments, which is an array-like object holding all of the values passed to the function. [for additional info ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) 

* whenever functions are called they are called with a context, so the value of "this" in function DEPENDS ON THE CALLER.

* Now suppose we have a class and it has a member, we assign this function to a variable, now we call this function through the variable. Now in this call, the context will be the default one (strict mode: undefined, else global or window), or if we are doing this in another class, this will wbe instance of that.

* To solve this either "bind" the "this" value in this function explicitly either in constructor or wherever, or define the function as an arrow function (they have this implicitly bound to the parent context (wrapper function, class etc)

```javascript
class Foo {
  constructor(name){
    this.name = name;
  }
  display(){
    console.log(this.name);
  }
}

var foo = new Foo('Saurabh'
var testFail = foo.display;
testFail() // this prints undefined in non strict mode and errors out in strict mode

foo.display = foo.display.bifoo.display(); // Saurabh

var display = foo.display;
display(); // Saurabh 
```
### How javascript works

* js is ran by the js engine that is provided by a jre (javascript runtime environment);
* A JRE is responsible to provide:
   * JS engine, 
   * set of APIs exposed to engine that we use can use in source code, 
   * a callback queue, 
   * a microtask queue
   * an event loop
 * The engine itself is responsible for taking the source code -* interpret/compile (JIT) -* then maintain the memory management and the call stack (stack of execution context)

* An execution context is sort of a container which encapsulates the code execution.

* This program execution for a context can be divided into 2 phases (creation and execution phase):
  * JS goes through the program and "hoists" (read assigns memory) for all the variables and functions that are part of the current scope.
  * Variables are assigned with a special token "undefined", functions point to the exact code they have.
  * After the hoisting phase, the code execution starts.
  * If a variable is accessed before it is initialized, it will be "undefined".
  * since functions are assigned the actual code they have, they don't have to be declared before accessed.
  * A functional expression, arrow functions, are similar to a variable,
    they are assigned undefined as well during the process of hoisting.
  * Once we call a new function a new execution context is created and the same 2 phases are repeated for it.
  * Once all the code is executed the context is popped from the stack.

* Whenver a JS program runs, the engine creates a global execution context and push this one on to the call stack.

### Async nature

* **Js is a SINGLE THREADED, SYNCHRONOUS LANGUAGE**:
  * It does not have multiple threads (makes it extremely light weight, only single call stack to maintain), so no parallell things running.
  * It runs programm in a sequencial nature, cannot just skip some and move on to next.

* So to perform async tasks, JS uses async callbacks to provide async nature and the underlying APIs (that either the browser or C++ APIs provided by node) take care of the concurrency stuff by eventually using threads only.

* Once these threads are done with the work, they push the callbacks sent to them to a callback queue.

* the event loop continously checks if (there is anything in the queue and if the callstack is empty) -* if so it pulls out the callback from the queue and pushes on the stack.

* There are 2 types of queue, callback queues and micro task queue(promises and mutation observer i.e an interface that provides the ability to watch for changes being made to the DOM tree). Micro task one has higher priority.

### `this` keyword

* it is a keyword
* A class is just a fancy function in javascript
* The value of "this" in a function depends where that function is called from.

* if that function is executed with a dot operator, "this" here is "implicitly" set to the entity on the left of the dot operator.

* To explicitly set the this keyword for a function call, we use call, bind and apply methods that are available on all functions in JS.
* Inside an arrow function, value of "this" does not depend on how and where it is called from (runtime binding), but rather on the value of this in its lexical env/context or simply in the parent function ().
* For a function, the value of "this" depends upon the context it is called in, i.e runtime binding.
* calling a method on an object, using '.' implicitly sets this for the method to that object
* calling a function directly will make value of "this" = global value (undefined in strict mode, else  = window )
* IMPORTANT: the value of this does not fallback to default in lexical value of this i.e if calling a function inside an object method, will point the "this" value in that function to global and not something like its caller's
* To explicilty set this value for a fn, all callables expose "bind", "apply", "call" api.  

### Lexical Scoping and Closures in JS
* Lexical Scoping defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions even if the parent function has returned.

* The "script" scope that you see in the dev tools when declaring global variables with "let" and "const", can be said as a global level block space. let, const and var are separately being stored at global level due to historical reason, to separate them from the shitty (no block level, multiple declaration allowed) piece of shit "var".

### JARGONS

* **Execution context**

  It is the environment that the current program is running in, every time a function is called a fresh new EC is pushed on the call stack.

* Scope, Lexical Scope and Scope Chaining
  
  Scope has a 2 way defination, in terms of a variable, what part of code can access it? In term of a function what variables can it access.

  A scope of a function will consist of its local scope and reference to its parent function's scope (or the scope of execution context that called it)

  When we access a variable, JS looks it into local scope, if not found, looks into the parent's scope (lexical), then into the lexical scope of its parent and so on, until there is no scope to look into in which case it errors out into a reference error (ERROR NOT DEFINED).

* **Hoisting**

  Before your code is executed, the JS Engine set asides memory space for Var & Func used inside the code. These variables & functions comprise the Execution Context of any function that is be executed. All variables in JS are initially set to undefined

* var, let, const block scoped

  * var has been there, since the dawn of JS.
  * variables declared using the var keyword are not block scoped, i.e they can be accessed from anywhere in the code before or after they are declared.
  They do not error out on redeclartion.

  * On the other hand let and const are more of a natural way of declaring variables when compared with other programming languages also.

  * lEt and const are block scoped, they are accessible only inside the block they are declared in.

  * if accessed before declaring a global let/const variable, program will error out, contrary to what happens in case of var which will say the variable is "undefined".

  * Remember the JS first goes through the code that is part of the current execution context and hoists the variables and functions, Now the variables of type var and (let, const) are hoisted in different scopes, first one will be in the current local scope (global in case of global context) and the other two in the block scope.
  In case of global scope this block scope in browsers is called Script.
  entities attached to current value of "this" canbe directly accessed with "this." 

* **Closures**

  "A function along with its lexical scope is called a closure."
  A function when returns a function, it is not only returning the function but also its own scope, since that is part of the lexical scope of the returned function.
  Which essentially means that the memory used by the parent function for its vars and stuff cannot be cleared since the returned function has access to them.

  So this function does not only return a function but its own scope as well (as part of the lexical scope of the retured function)

  Uses of closures, allows to implement data encapsulation, no need to make data global directly and give every piece of code access to it, instead tie the data and function operating on it in a new function and return the operating fn from parent.

  This allows to implement FactoryMethod kind of design.

  Downside is that it holds the reference to all the varibles and fns of its lexical scope which cannot garbage collected, until the function returned has no reference.
  
* **Import / Export**
	This import declaration:
	```js
	import {join} from 'lodash';
	```
	brings in the entire lodash file, all 70K.
	
	**VS**
	
	this:
	```js
	import join from  'lodash/join'
	```
	brings in just the `join` module, which is less than 1K.














