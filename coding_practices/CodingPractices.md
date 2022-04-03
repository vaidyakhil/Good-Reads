## GoodReads

* [Plugin architecture and how it benefits extensibilty](https://softwareengineering.stackexchange.com/a/163654)
* [Dependency inversion, solid principle](https://medium.com/@kedren.villena/simplifying-dependency-inversion-principle-dip-59228122649a)
* [GREAT ARTICLE -> Interfaces, java](https://dev.to/gaurang847/do-you-really-understand-interfaces-1g7l)
* [GREAT ARTICLE -> system design bird's eyeview, robert theon](https://robertheaton.com/2020/04/06/systems-design-for-advanced-beginners/)


## Notes

### Clean Code - Robert C. Martin

*  When I write functions, they come out long and complicated. They have lots of
indenting and nested loops. They have long argument lists. The names are arbitrary, and there is duplicated code. **But I also have a suite of unit tests that cover every one of those clumsy lines of code**. 
* So then I massage and refine that code, splitting out functions, changing names, eliminating duplication. I shrink the methods and reorder them. Sometimes I break out whole classes, **all the while keeping the tests passin**

* Any comment that forces you to look in another module for the meaning of that comment has failed to communicate to you and is not worth the bits it consumes

* Procedural code makes it hard to add new data structures because all the functions must
change. OO code makes it hard to add new functions because all the classes must change

*the idea that everything is an object  is a myth. Sometimes you really do want simple data structures with procedures operating on them*

* author differentiates object(entities) and data-structure (data classes) from one another in the sense that objects abstract away there internals and expose behaviourial methods that can operate on internals:

```java
/* object */
public interface Point {
	double getX();
	double getY();
	void setCartesian(double x, double y);
	double getR();
	double getTheta();
	void setPolar(double r, double theta);
}

/* data structure */
public class Point {
	public double x;
	public double y;
}

/*
* The beauty of object above is there is no way you can tell whether the
* implementation is in rectangular or polar coordinates.
* It might be neither! And yet the interface still unmistakably represents a data structure.

* But it represents more than just a data structure.
* The methods enforce an access policy.
* You can read the individual coordinates independently, but you must set the coordinates together as an atomic operation
*/
```

* wrapping third-party APIs is a best practice. When you wrap a third-party API, you minimize your dependencies upon it: You can choose to move to a different library in the future without much penalty. Wrapping also makes it easier to mock out third-party calls when you are testing your own code

* If you are tempted to return null from a method, consider throwing an exception or returning a S PECIAL CASE object instead. If you are calling a null-returning method from a third-party API, consider wrapping that method with a method that either throws an exception or returns a special case object


### Functional Programming
* Functional way adheres to the pure functions concept, functions should neither affect nor should their output depend on factors outside there scope.
* this makes code more unit testable.
* makes code flow more readable.
* use the right tool for the job - if you want a script of a few lines, use a scripting language. If you want more structure and organization, then you should expect a bit of "ceremony" to go with that.
