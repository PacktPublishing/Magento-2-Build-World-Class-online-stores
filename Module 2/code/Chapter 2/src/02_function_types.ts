namespace chapter02.function_types {
  
  // Function without type annotations
  var saySomething1 = function(something) {
    return `says : ${something}`;
  }
  
  // Function with partial type annotation
  var saySomething2 = function(something : string) : string {
    return `says : ${something}`;
  }
  
  // Function with full type annotation
  var saySomething3 : (something : string) => string = function(something) {
    return `says : ${something}`;
  }
  
  // Declare full type annotation
  var saySomething4 : (something : string) => string; 
  
  // Declare implementation
  saySomething4 = function(something) {
    return `says : ${something}`;
  }
  
}