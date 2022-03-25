/*
**	Try out applying bind(this) to count or the inner callback passed to setTimeout and see the diff
*/


/*
function globalFn () {
	console.log("globalFn: ", this);
}

function separate () {
	console.log("\n -------- -------- \n")
}

class MyClass {
	
	constructor () {
		this.age = 12;
		this.name = "akhil"
	}

	count = function () {
		console.log("outside-> ", this);
		separate()

		const asd = function () {
			console.log("asd: ", this);
			separate()
		}
		
		console.log("outside-> ")
		asd();

		console.log("set timeout-> ")
		setTimeout (
			asd,
			1000
		)
	};

	countArr = () => {
		console.log("outside: ", this);
		const asd = function () {
			console.log("asd: ", this);
		}
		
		console.log("outside: ")
		asd();

		console.log("set timeout: ")
		setTimeout (
			asd,
			1000
		)
	};
}

console.log("global-> ", this)
separate()

const obj = new MyClass();
console.log(obj.count());
*/



/*
let obj = { name: "Jane" }
function greet() { console.log("Hello : ", this.name); }
greet.call(obj)
*/