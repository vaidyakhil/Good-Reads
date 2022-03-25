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

### Functional Programming
* Functional way adheres to the pure functions concept, functions should neither affect nor should their output depend on factors outside there scope.
* this makes code more unit testable.
* makes code flow more readable.
* use the right tool for the job - if you want a script of a few lines, use a scripting language. If you want more structure and organization, then you should expect a bit of "ceremony" to go with that.
