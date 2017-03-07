namespace chapter02.destructuring {
	
	// Destructuring arrays
	var foo = ["one", "two", "three"];
	
	// Without destructuring
	var one   = foo[0];
	var two   = foo[1];
	var three = foo[2];
	
	// With destructuring
	var [one, two, three] = foo;
	
	// Desttucturing object literals
	var obj = {
		a : 1, 
		b : 2
	};
	
	var {a, b} = obj;
	
	// Destructing and the rest operator
	var [a, b, ...others] = [1, 2, 3, 4, 5];	
	
}