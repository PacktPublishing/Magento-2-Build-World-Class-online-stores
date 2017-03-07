namespace chapter02.closures {
	
	var counter = (function(){
		
		var i = 0;
		
		var counter = {
			next : function() {
				i = i + 1;
				return i;
			},
			prev : function() {
				i = i - 1;
				return i;
			}
		};
		
		return counter;
	})();
	
	counter.next(); // 1
	counter.next(); // 2
	counter.next(); // 3
	counter.prev(); // 2
	counter.prev(); // 1	
	
}