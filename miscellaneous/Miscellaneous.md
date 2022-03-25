## GoodReads

* [Compiler-Interpreter](https://www.freecodecamp.org/news/compiled-versus-interpreted-languages/)

## Notes 

### Compiler-Interpreter

* 	Compiler converts your source code to machine code at once, 
	it generates an executable, which can then be run independantly of the source code. (in general faster).

* Interpreter goes through the source code line by line and executes it at the same time. (in general slower).
	Interpreter runs the code themselves. (gap in knowledge of how it does system calls / OS API calls)

* Java is first "compiled" into "byte code" and then
	the byte code is interpreted by interpreter JVM, which communicates with the underlying platform.

### JVM, JRE, JDK
* For java source code what we need is a JVM.

* 	A JVM is a specification/ an interface/ blueprint.

* 	A JRE along with other components like class loader etc.. provides a platform specific implementation of the JVM.

* 	Now different operating systems have different platform specific implementations of JVM

* 	In this way java applications becomes portable as the same genrated byte code (.class) files can be run on 
	any platform (all of which have their JVM implementations)

* 	for other languages, the compiler directly compiles the code into machine code that the machine it was compiled
	on can understand

* JDK contains JRE + development tools (debugger linter etc...)


