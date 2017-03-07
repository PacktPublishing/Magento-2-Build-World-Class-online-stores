	
class Square {
	length : number; 
	constructor(length : number) {
		this.length = length;
	}
}

class Rectangle {
	length : number;
	width : number;
	constructor(length : number, width : number) {
		this.length = length;
		this.width = width;
	}
}

class Triangle {
	base : number
	height : number;
	constructor(base : number, height : number) {
		this.base = base;
		this.height = height;
	}
}

namespace chapter02.function_overloading.with_any {
	
	// Function overloading
	function calculateArea(shape : Square) : number;    // overloaded signature
	function calculateArea(shape : Rectangle) : number; // overloaded signature
	function calculateArea(shape : Triangle) : number;  // overloaded signature
	function calculateArea(shape : any) : number        // implementation signature
	{
		if(shape instanceof Square) {
			return shape.length * shape.length;
		}
		if(shape instanceof Rectangle) {
			return shape.length * shape.width;
		}
		if(shape instanceof Triangle) {
			return (shape.base * shape.height) / 2;
		}
	}
	

	var square = new Square(5); 
	var rectangle = new Rectangle(3, 5); 
	var triangle = new Triangle(3, 5);
	
	calculateArea(square);    // 25
	calculateArea(rectangle); // 15 
	calculateArea(triangle);  // 7.5
}

namespace chapter02.function_overloading.with_union {
	
	// Using an union type in implementation signature instead of any
	function calculateArea(shape : Square) : number;
	function calculateArea(shape : Rectangle) : number;
	function calculateArea(shape : Triangle) : number;
	function calculateArea(shape : (Square | Rectangle | Triangle)) : number {
		if(shape instanceof Square) {
			return shape.length * shape.length;
		}
		if(shape instanceof Rectangle) {
			return shape.length * shape.width;
		}
		if(shape instanceof Triangle) {
			return (shape.base * shape.height) / 2;
		}
	}
	
	var square = new Square(5); 
	var rectangle = new Rectangle(3, 5); 
	var triangle = new Triangle(3, 5);	
		
	calculateArea(square);    // 25
	calculateArea(rectangle); // 15 
	calculateArea(triangle);  // 7.5
}