namespace chapter02.type_guards {
	var x : any = {};
	
	// Type guard
	if(typeof x === "string") { 
	// no errors as the type of x is string inside the type guard
	x.toLowerCase();
	}
	
	x.foo(); // no errors as the type of x is any here
	class Animal {
		name : string;
		constructor(name : string) {
			this.name = name;
		}
	}
	
	class Cat extends Animal {
		constructor(name : string) {
			super(name);
		}
		public meow(){
			console.log("meow!");
		}
	}
	
	// Custom type guard
	function isCat(a: Animal): a is Cat {
	return a.name === "kitty";
	}
	
	var animal : Animal = new Cat("kitty");
	
	if(isCat(animal)) {
	x.meow(); // animal is Cat in this block
	}
}