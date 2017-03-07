namespace chapter02.local_types {
	
	class A {
		x: number;
		do() {
		// Declaring a local type
		class B {
			y : string;
		}
		return new B();
		}
	}	
	
}