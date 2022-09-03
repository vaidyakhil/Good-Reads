## GoodReads

* [Compiler-Interpreter](https://www.freecodecamp.org/news/compiled-versus-interpreted-languages/)

* [airbnb sunsetting rn](https://medium.com/airbnb-engineering/sunsetting-react-native-1868ba28e30a)

* [coin base goes full react native](https://blog.coinbase.com/announcing-coinbases-successful-transition-to-react-native-af4c591df971)

* [Tool to Generate language specific type safe schema from json](https://quicktype.io/)

* [What is Firebase, different services, it offers and other stuff](https://medium.com/firebase-developers/what-is-firebase-the-complete-story-abridged-bcc730c5f2c0)

* [Setup multiple git users on a machine](https://dev.to/fedekau/automatically-managing-personal-and-work-git-configurations-27ad)

* [Detailed Explanation: CI/CD pipelines for React Native Application](https://medium.com/@paramsingh_66174/ci-cd-pipeline-for-react-native-apps-98246237e29d)

* [Beginner: git rebase interactive](https://hackernoon.com/beginners-guide-to-interactive-rebasing-346a3f9c3a6d)

* [Beginner: git merge vs rebase](https://www.youtube.com/watch?v=CRlGDDprdOQ)

* [Pitfalls of git rebase, difficult debugging etc](https://medium.com/@fredrikmorken/why-you-should-stop-using-git-rebase-5552bee4fed1)

* [Visualization for different merge strategies](https://github.com/goharbor/harbor/discussions/16810#discussioncomment-2758668)

* [Canvas Rendering: Google Docs](https://medium.com/young-coder/the-future-web-will-canvas-rendering-replace-the-dom-847be872884c)

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

* Why UUID(s) are used in case of database entries: the sequential approach doesn’t work well in any kind of distributed system, because it means that **INSERT** commands must be executed one by one. This restriction can cause major performance issues at scale.  

* UUIDs solve all of these problems because:
	* They’re globally unique, so the chances of encountering a duplicate ID even in external data are very, very small.
	* They can be generated without the need to check against a central node, so in a distributed system, each node can generate UUIDs autonomously without fear of duplication or consistency issues.


Reason #1 alone is a good argument for using UUIDs in almost any database system. As a business that aspires to operate at scale, reason #2 is also very relevant to our bookshop, because distributed databases offer the best scalability and resilience




