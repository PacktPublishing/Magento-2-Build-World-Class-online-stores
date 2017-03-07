namespace chapter02.tuple_type {
	
	// Tupe type
	var t : [number, string] = [1, "hello"];
	
	// Valid usages of tuple type
	t = [2, "test"];
	var t0 = t[0];  // Type number
	var t1 = t[1];  // Type string
	
	// Invalid usages of tupe type
	// t = [];                // Error
	// t = [1];               // Error
	// t = ["test", 2];       // Error
	// t = [2, "test", true]; // Error
}