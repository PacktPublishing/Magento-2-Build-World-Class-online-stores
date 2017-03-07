namespace chapter02.optional_and_default_parameter {
	
	// Optional parameters
	function sume(
		mandatory1 : number, 
		mandatory2 : number, 
		optional1? : number, 
		optional2? : number
	) {
			
		var result = mandatory1 + mandatory2;
		
		if(typeof optional1 !== undefined) {
			result = result + optional1;
		}
		
		if(typeof optional2 !== undefined) {
			result = result + optional2;
		}
	
	return result;
	}
	
	// valid usages
	sume(2, 2);      // OK
	sume(2,2,2);     // OK
	sume(2,2,2,2);   // OK
	
	// Invalid usages
	// sume(2);         // Error
	// sume(2,2,2,2,2); // Error
	
	// Optional parameter "date"
	function saveWithOptionalParam(val : any, date? : Date) {
		if(date === undefined) {
			date = new Date();
		}
		// ...
	}
	
	var myDate = new Date();
	saveWithOptionalParam({});         // OK
	saveWithOptionalParam({}, myDate); // OK
	
	
	// Default parameter "date"
	function saveWithDefaultParameter(val : any, date : Date  = new Date()) {
		// ...
	}
	
	var myDate = new Date();
	saveWithOptionalParam({});         // OK
	saveWithOptionalParam({}, myDate); // OK
	
}