
## Good Reads
- [Android Architecture components, live data, lifecycle](https://medium.com/exploring-android/exploring-the-new-android-architecture-components-c33b15d89c23)

- [Live data, official doc](https://developer.android.com/topic/libraries/architecture/livedata)

- [Jetpack, AAC, data binding, live data, mvvm, view model (Excelent series for revision)](https://www.youtube.com/playlist?list=PLRKyZvuMYSIO0jLgj8g6sADnD0IBaWaw2)

- [data binding, view binding](https://stackoverflow.com/a/58947344/7930262)

- [Recycler view, listview, adapter, layout manager, excelent for revision](https://www.youtube.com/watch?v=ZqQuYgwrtAI&list=PLfuE3hOAeWhbmDA26ARjViSjTcOHSqpmT)

- [Gradle, Build system, phases of gradle build process](https://proandroiddev.com/understanding-gradle-the-build-lifecycle-5118c1da613f)

- [Gradle Dependency Configurations: impl, compile etc...](https://medium.com/swlh/how-gradle-dependency-configurations-work-underhood-e934906752e5)

- [implementation-vs-api-in-gradle](https://medium.com/mindorks/implementation-vs-api-in-gradle-3-0-494c817a6fa)

- [classpath, gradle](https://stackoverflow.com/a/41571818/7930262))  

- [caching, exoplayer, videoplayer](https://medium.com/google-exoplayer/pre-caching-downloading-progressive-streams-in-exoplayer-3a816c75e8f6)

- [caching, exoplayer, implementation](https://proandroiddev.com/video-preloading-precaching-using-exoplayer2-in-android-da340cc268d9) and [repo](https://github.com/iambaljeet/VideoPreLoading)

- [Memory Leaks, GC](https://proandroiddev.com/everything-you-need-to-know-about-memory-leaks-in-android-d7a59faaf46a) and [Leak Canry usage](https://square.github.io/leakcanary/fundamentals-fixing-a-memory-leak/)

- [threading, async task, handler-looper](https://www.youtube.com/watch?v=fZTJflHJoBY) and [this](https://www.youtube.com/watch?v=QfQE1ayCzf8&list=PLrnPJCHvNZuDl4WUKi26WbzLMsM1sXCD4&index=1)

- [storage model, file system, sandboxing](https://medium.cobeisfresh.com/taming-file-storage-on-android-part-1-16756ce91182) and [article2](https://proandroiddev.com/storage-model-android-101-26bc8aef9609) and [official doc](https://developer.android.com/training/sharing/send)

- [interview prep](https://medium.com/@mohitdholakia4/interview-questions-for-android-developer-3a18e41ebcda)

- [Hiding Secrets in Android](https://rammic.github.io/2015/07/28/hiding-secrets-in-android-apps/)

- [APK analyser](https://developer.android.com/studio/command-line/apkanalyzer#commands)

- [ART and Dalvik medium](https://proandroiddev.com/android-runtime-how-dalvik-and-art-work-6e57cf1c50e5)

- [ART and Dalvik short video](https://www.youtube.com/watch?v=0J1bm585UCc&feature=youtu.be)

- [ART Android Dev Summit ](https://www.youtube.com/watch?v=vU7Rhcl9x5o)

- [ART Twitter Thread](https://twitter.com/dhina17l/status/1618606564205801472)

- [High level desscription of varius Gradle configuration files | groovy syntax | api vs implementation ](https://medium.com/gradeup/the-simplest-guide-to-understanding-gradle-758d9924e6ca)

## Notes

### Basics:

* 	The R Class
	When your application is compiled the R class is generated. 
	It creates constants that allow you to dynamically identify the various contents of the res folder, including layouts

* 	setContentView (that we use to set layout of an activity in onCreate):
	It inflates the layout.
	Android reads your XML file and generates Java objects for each of the tags in your layout file.

*	FrameLayouts are optimized to have a single child view, you can use it to position views absolutely
	the order in which views are specified inside frame layout, they will render on top of one another
	
*	there are overflow menus in android which we can utilize to provide additional functionalities.
	for activities to have them they need to override, methods like:
	```
		onCreateOptionsMenu // use menu inflator to inflate menu from a menu resource
		onOptionsItemSelected // to implement click handlers
	```

*	The pixel density is the number of pixels within a physical area of the screen
	and is referred to as dpi (dots per inch)
* 	This is different from the resolution, which is the total number of pixels on a screen.
*	dp (or dip) provides you with pixel density independence so that the UI looks the same physical size to user
	independent of the pixel density of their device.
*	Base pixel density in android is 160 dpi (160 pixels/ dots per inch). (This was dpi for first android device)
*	Now to maintain the physical size, we use dp (or dip) which scales as follow:
	```
	px = ((dp) * (dpi)) /160; // for base density 1 dp = 1 pixel
	```

* 	Explicit intents: constructor takes context and ref to the classname of the activity requested
*	Implicit intents: constructor takes action type (Intent.ACTION_VIEW), and data
*	use Uri.Builder class to generate uri, rather than using string concatenation for uris. [res](https://classroom.udacity.com/courses/ud851/lessons/12055b5c-5e3a-42c6-9f8b-c02daf3d0d7d/concepts/944a58a9-4bb9-4797-91d7-949393ba2305)
*	A url is a uri that identifies network resource

### SDK versions:
*	minSdk version:
	Google Play won’t show your app on devices running an Android platform version lower than your minimum SDK version
	You need to balance the opportunity of expanding your audience, with the cost of supporting those users
*	targetSdk version:
	is NOT a high pass filter -- it’s used only to declare which platform version you've tested your app on

### Activity LifeCycle

*	Android activity undergoes several phases of lifecycle events 
	and developer gets to hook into these lifecycle events by overriding lifecycle event methods
	```
		onCreate: 	begining of lifecycle, instance is created, initialize, perform viewbinding, fetch data here

		onRestart: 	called when once onStop has been called and activity again becomes visible

		onStart: 	called when activity becomes visible to user

			onResume: 	called when activity is in foreground, i.e receiving events, interacting with user

			~onPause:	called when activity goes in background,
						i.e still visible but overlapped by other component (dialog / bottomsheet)
						interacting with Notification tray does NOT pause activity.

			~onSaveInstanceState: called when activity is about to be destroyed, after onPause

		~onStop: activity is not visible now, user navigated to other activity/ pressed home etc.

	~onDestroy: end of lifecycle, clean up phase, release resources here
	```

### OnSavedInstance
- onSavedInstanceState and onRestoreInstanceState when your activity is killed due to some OS process and 
	not user intentional eg. orientation change or OS freeing up memory by clearing out activities in background

- in such cases your activity goes under RECREATION and then these callbacks are called.

- onSavedInstanceState ->called after onPause in such cases ^^ 
	onRestoreInstanceState -> called after onStart after the recreation of activity in such cases ^^

### Task affinity launch modes

 - A task is nothing but a stack of activities, when we press the button which displays recent apps, then button actually displays all the running tasks, so if from same app we launch an activity as single task it will be shown as separate task in the recent app display.
 - Activity can have different launch modes
	 - standard (default)
	add instance to the top of the stack of the same task, no matter if an existing instance exist in stack or not.
	- single top
	if an activity is on top of stack, and we try to add another instance on top, do not add new instance (SINGLE TOP)
	- single task
	activity if given a separate affinity (like a pacakge name in manifest), it will always launch in a separate task and in that task if there are some activities on top of a single task activity, OS will remove all those on top and reuse the existing instance

- Launch modes can be programatically controlled using intent flags

 ### RecyclerView
There are 3 components to a recycler view:
*	**Layout manage**r: this controls how the all the items would be laid out, 
	linear vertical/horizontal fashion, grid fashion or staggered fashion
*  **Adapter** which controls what data to bind with
	what position's item and what type of view to bind with exposes 
	onCreateViewHolder and onBindViewHolder APIs:
	*	onCreateViewHolder: return the view holder instance in which we do the findViewById() stuff (costly operation)
	*	 Once view holder instance is created for a position, from next time onwards, same instance is used and not created a new one, this avoids lot of expensive operations and layout inflation, findV.. etc..
	*	next onBindViewHolder is called, where you bind the view with the data, setText(...) stuff.
	> what the adapter is doing is instead of creating 80 view instances in memory for the 80 items in the list,
	it is creating only 10 such instances in memory that are enough to cover the whole screen
	> Once the user scrolls, we bind the data of new item to the existing instances for which we had references in memory.
	>	This saves a lot of memory in case of a large list and 
	also saves a lot of lookups (find view by id) calls into our view heirarchy,
	since we have cached these references by using view holder class instances for the 10 views

		
*	**Recycler**, this comunicates with both adapter and layout manager
	and decides when to use same holder and when to create new.

### Permissions:

*	permissions on the platform exist solely for 2 reasons: restrict data, restrict actions of an app.

*	There are install time permissions ("normal"), which an app store will display users at the time of install
	ACCESS_NETWORK_STATE

*	Then there are run time permissions ("dangerous"), require your app to explicitly get user consent at run time
	ACCESS_BACKGROUND_LOCATION

* 	In either case you have to declare those permissions in manifest

 ### LiveData
 *	it is a kind of observable data holding class, but with super powers! it is lifecycle aware and 
	hooks into the lifecycle of the owner of the observer.
*	Now the Observer here is not to be confused with LifeCycleObserver, THE OBSERVER HERE IS AN
	INTERFACE THAT IMPLEMENTS ONCHANGE FUNCTION.
*	Live data sends update to only active observers, i.e whenever an observer's owner's lifecycle ends,
	live data
	unsubscribes the observerer, this fixes memory leaks issues.
*	Live Data is an abstract class with setValue and postValue as private methods
*	We use mutable live data class which extends live data and exposes set and post api
*	set is supposed tobe called from UI Thread, post can be called from Bg threads.
*	There is a common pattern around how to keep the mutable data as private and still allow the view layer to access the
	live data. eg:
	```kotlin
    /**
	 * VIEW MODEL
     * Request a snackbar to display a string.
     *
     * This variable is private because we don't want to expose MutableLiveData
     *
     * MutableLiveData allows anyone to set a value, and MainViewModel is the only
     * class that should be setting values.
     */
    private val _snackBar = MutableLiveData<String?>()

    /**
     * Request a snackbar to display a string.
     */
    val snackbar: LiveData<String?>
        get() = _snackBar


    /*
    * ACTIVITY
    */
	viewModel.snackbar.observe(this) { text -> ... }
	```

### LifeCycle
*	LifeCycleOwner is an interface that implements getLifeCycle method, this method returns an object
	of class Lifecycle which exposes current state and state change events etc..
*	Activities and fragments do implement this. :)
*	LifeCycleObserver  is an interface that does not implement any method but uses methods with annotation 
	( @OnLifecycleEvent now deprecated ) to hook into a lifecycle events.
*	Fragments outlive there views life, hence we should assign null to any reference of a view that we might 
	be keeping in fragement, in the onDestroyView method (Menu fragment in UC)

*	since view model outlives life cycle of  the view associated with it, do not keep ref of view in 
	viewModel as it might result in memory leaks
	(view can be garbage collected but there is a ref to it in Vm).

```kotlin
//	Activity:
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    lifecycle.addObserver(SampleLifeCycleObserver())
    setContentView(R.layout.activity_single_task)
    Log.d(TAG, "onCreate: of Activity is called")
}

// 	SampleLifeCycleObserver:
class SampleLifeCycleObserver: DefaultLifecycleObserver {
    private val TAG = "LifeCycle"
    override fun onCreate(owner: LifecycleOwner) {
        super.onCreate(owner)
        Log.d(TAG, "onCreate: of observer is called")
    }

    override fun onResume(owner: LifecycleOwner) {
        super.onResume(owner)
        Log.d(TAG, "onResume: of observer is called")
    }
}
```

### JETPACK

*	it is a suite of libraries, that are individually adoptable, buildable (see assets/android_jetpack)
*	collection of libs that aim to allow to build testable, maintainable, robust app is called architecture components
*	this includes data-binding, live-data, view-model, lifecycle ...
*	google recommends use of MVVM architecture along with JetPack, to build apps

### BINDING
*	There are 2 types of "binding" that we do in android, view-binding, data-binding
*	View Binding: once you enable this for a module, for every layout in that module, a binding file is generated
	PascalCaseLayoutFileNameBinding.java.
*	Through this file, you have access to all the views with proper type checked, null safe references in comparison
	to using findViewById which can result in null pointer exceptions

### DATA BINDING (more important one)
*	Data binding = Binding data (from code) to views + ViewBinding (Binding views to code) 
*	This allows you to tie your views with the data source (1 way binding) and (2 way also)
*	data binding allows you to get rid of all the boiler plate code of finding views and setting there properties in
	activities.
*	data binding when used along with live data can reduce boiler plate code to minimal and code will be very easy
	to understand and maintain.
	STEPS:
	- enable dataBinding in build file for the module
	- wrap your layouts in <layout> tag, this tells the compiler to create databinding for this layout (real time)
	- now you add a <data> tag in your example, give a name to the variable and specify a type
	- this variable you can access across the xml, eg = text:"@{variable.some_property}"
	- In your activity's onCreate, you set the contentView using DataBindingUtil class 
		(part of the lib), which returns the binding obj, 
		binding.variable = dataSource // dataSource can be ViewModel here.
	- when you use data binding with live data, you have to set the lifecyle owner of the binding also, else it 
	   won't receive updates.
   	- for 2 way data binding, eg. of editext (user types -> update live data -> update associated views),
   	   syntax: 
   	   ```
   	   text: "@={dataSource}"
   	   ```
```kotlin
/*
* Activity
*/
override fun onCreate(...) {
	super...
	binding = DataBindingUtil.setContentView(...)
	viewModel = ViewModelProvider(this, ViewModelFactory(view model's params), ....)

	binding.variableName = viewModel
	binding.lifecyleOwner = this // this ensures that whenever there is an update in data, binding.variableName gets the update notification from live data and ui updates
}
```
  
  
#### There seems to be some kind of classification called android application components and these four are those
*	activity
*	service
*	broadcast receiver
*	content provider

### Gradle and build Processes

* Maven: Is a project management tool / Build automation tool for java, and uses something called project object model which uses a xml file to store all configurations.
* Maven repositories are where all the dependancies lib code is fetched from.
* Gradle: Developed as enhancement to maven, takes care for runnnig tasks, dependaciy management, build automation etc.. It uses groovy for the project configuration files rather than xml based model as maven does.

*	The build process has 3 phases: initialization, configuration and execution

*	initialization involves gradle identifying multiple projects (read modules) that need to build
*	These are specified in settings.gradle
*	The configuration phase involves creation of a DAG of task dependencies 
*	(tasks) are basically steps that need to be exceuted in the build process.
*	compiling source code, generating class files etc. are some examples.

*	The dependencies mentioned in buildscript block are not project dependecies but the build script dependecies, 
*	the script needs them to be able to run.
*	These are generally added using the classpath keyword

* 	The project dependencies are added using the "compile"(deprecated), "implementation" and "api" keywords
*	compile was deprecated -> api keyword does the same
*	implementationn vs api, well api leaks the internal dependencies of a library to the client, increasing compile time, if the internal lib is changed.

### Threading

*	Android needs to maintain 60 FPS and for that main thread needs to be off loaded as much as possible.
	That is the main reason, we use threading in android.

*	AsyncTask is deprecated now.
*	It showed a number of issues and did not offer much benefit over direct use of Executers.
*	AsyncTask gives a general interface to get some work done on a background thread.
*	TO use, we extend AsyncTask (Templatized types of  params, progress and result) class.
*	Override doInBackGround method to describe the task.
*	After that execute(...params) can be called on UI thread.
```
myImpl.execute(param1, param2, param3, param4);

class MyImpl: AsyncTask<String, Int, String> {
	onPreExecute // will be executed on UI thread

	doInBackGround // does the task in background

	onPostExecute // after task is done this is called on UI thread

	onProgressUpdate // will be called on UI thread every time 	publishProgress is called in doInBack..
}
```

### Storage
* **Internal storage**: when we say internal storage, we mean the app specific dir that is made for all apps, hidden from user
* **Scoped Storage**:
	* Unrestricted access to an application’s internal and external storage without any permission.
	* Unrestricted access to built-in collections like audios, images and downloads.
	* Reading and writing own files won’t require a permission.
	* Reading files which our app don’t own requires READ_EXTERNAL_STORAGE permission.
	* Reading/Writing outside any collection requires system picker.
	* WRITE_EXTERNAL_STORAGE is deprecated since API Level 29 and has the same effect as READ_EXTERNAL_STORAGE if used.
	* To access location metadata of a media file, ACCESS_MEDIA_LOCATION permission is required in Manifest file.

* **Android Storage model**
	* Android storage model has now been revamped to avoid asking users permission for storage access by providing some level of access by default. 
	* Apps can now read/write into their app-specific directories without asking users. This gives apps scoped access to storage.
	* Environment.getExternalStorageDirectory (now deprecated)
		* Note: don't be confused by the word "external" here. This directory can better be thought as media/shared storage.
		* It is a filesystem that can hold a relatively large amount of data and that is shared across all applications (does not enforce permissions).
		* Traditionally this is an SD card, but it may also be implemented as built-in storage in a device that is distinct from the protected internal storage and can be mounted as a filesystem on a computer.

* **SAF** 
	* you don’t need any permissions if you’re trying to obtain any documents or other types of content when using Storage Access Framework.
	* That’s because a user is involved in the process of selecting the actual content to work with.
	


### Android Runtime
* Java compiler converts Java source code into Java virtual machine instructions, which Java class files store
* Java .class files contain hex code meant to be read by the Bytecode interpreter which is part of the JVM
* Android Runtime is the layer between Android framework/OS and actual kernel
* ART is responsible to generate executables from the dex bytecode (Dalvik executable)
* Dalvik is the predecessor ART; Dalvik was used until Android KitKat and was specifically optimized for RAM usage, as in those days Android devices had very limited memory
* Dalvik used JIT, so the application code was interpreted just in time into machine code and executed in order to use less RAM.
* As the devices evolved though and apps became larger in size, Dalvik suffered with runtime performance issues like frozen UI, Janks etc..
* From Android L onwards ART replaced Dalvik completely and brought Ahead of time (AOT) compilation
* This had its own challenges like: longer install/update time, excess RAM usage etc..
* After Android N, profile-guided compilation was introduced which basically identifies hot methods or the part of code which is heavily used is AOT compiled while other is JIT interpretted.
* That means a few first usages of the app might be kinda slow because in that case only Just in Time compilation is going to be used
* Later cloud based profiles were introduced to avoid those slow first usages.
* All this is done without any changes being expected from developer/user side.
* All taken care at the ART layer. 
* `.java/kt (source) ---> .class (bytecode) ---> .dex ---> .oat ---> ART (execution)`
* Below API level 21 (Dalvik), only single dex file can be generated by default which imposes the 64K method limit
* However ART has a native support for multi-dexing and generates class*N*.dex files
* APK consist of dex files, resource files and manifest file
