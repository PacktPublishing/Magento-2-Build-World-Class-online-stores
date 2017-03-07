namespace chapter02.function_scope {
  
  // Demostrating function scope
  function scope1() { 
    counter = 5; 
    if (true) { 
      var counter; 
    } 
    return counter; 
  }
  
  scope1(); // 5
  
  // using iife to control block scope
  function scope2() { 
    if (true) { 
      var counter = (function(){
      var counter;
      counter = 5; 
      return counter;
    })();
    } 
    return counter; 
  }
  
  // Using the 'let' keyword to control block scope
  function scope3() { 
    if (true) { 
      let counter;
    counter = 5; 
    return counter;
    }  
  }
  
  // Declaring contants
  const MY_OBJECT = {"key": "value"};
  
  // Valid usage of constant
  MY_OBJECT.key = "otherValue"; // OK (Mutation)
  
  // Invalid usage of constant
  // MY_OBJECT = {"OTHER_KEY": "value"}; // Error (Reassignment)  
    
}