namespace chapter02.rest_parameters_and_spread_operator {

	// Function with rest parameters
	function sume(...numbers : number[]) {
		var result = 0;
		for(var i = 0; i < numbers.length; i++) {
			result = result + numbers[i];
		}
		return result;
	}
	
	// Valid usages
	sume(2);         // OK
	sume(2, 2);      // OK
	sume(2,2,2);     // OK
	sume(2,2,2,2);   // OK
	sume(2,2,2,2,2); // OK
	
	// Spread operator
	function invokeSume(...numbers) {
		var sumeResult = sume(...numbers);
		return sumeResult;
	}
	
	function drawText(x: number, y: number, ...strings: string[]) {
		// draw text
	}
	
	drawText(10, 20, "hello");
	drawText(10, 20, "hello", "world");
	var a = ["one", "two"];
	drawText(10, 20, ...a);
	drawText(10, 20, "zero", ...a, "three");
	
}