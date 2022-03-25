## GoodReads
- [kotlin scoping functions](https://medium.com/@fatihcoskun/kotlin-scoping-functions-apply-vs-with-let-also-run-816e4efb75f5)

- [Coroutines mental model](https://www.lukaslechner.com/understanding-kotlin-coroutines-with-this-mental-model/)

- [Kotlin Classes related concepts](https://kotlinlang.org/docs/classes.html)


## Notes

* vararg is a keyword that allow to declare variable number of args in a func

	```kotlin
	fun example( int a, vararg items: String) {
	
	}
	```

* spread operator, * can be used to spread collections

* interfaces can have default implementations of the methods they expose

* interfaces can also have variables as members

* classes (or class members etc) are by default public and final, i.e they can be excessed but not inherited

* "name" is implict property of enum class in kotlin, enum classes can also have functions and can access the name property

* we can also use "is SomeType" as a branch in "when" block for a variable to type check over it

* kotlin supports destructive declaration -> val (name, age) = getPersonObject()
*	There are 5 scoping functions (refer GR for better insight)
	```
	[ let(it), with(this), run(this) ]
	[ apply(this), also(it) -> return result ]
	```
* 	`const` -> compile time constants
*	`val` -> constant but can be assigned a computation
*	`var` -> can be reassigned as well

### Project structure and visibility
*	A module is group of files that are compiled together, for eg. in a gradle project, each folder with build.gradle file
*	public, private (visible in the file), protected (members and subclasses), internal (visible in the module) are 
	visibility modifiers.
*	open and final are "open for extension" modifiers that is if a class, member variable or function is available for
	overriding, default is final in kotlin

### Coroutines
* a good practice is to use withContext to make sure every function is safe to be called on any Dispatcher including Main — that way the caller never has to think about what thread will be needed to execute the function
