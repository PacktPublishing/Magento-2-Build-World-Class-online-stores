namespace chapter02.function_declaration_vs_expression {
  
  console.log(saySomethingNamed());   // "Something!" 
  console.log(saySomethingUnnamed()); // Error
  
  // Function declaration
  function saySomethingNamed() { 
    return "Something!"; 
  }
  
  // Function expression
  var saySomethingUnnamed = function() { 
    return "Something!"; 
  }
  
}