namespace chapter02.string_literal_types {
  
  // String literal (Note: TypeScript >= 1.8 is required)
  type ok = "ok";
  
  // Some valid usages string literal usages
  var a : ok = "ok";
  var b : "ok" = a;
  var c : string = a;
  
  // String enumerations powered by string literals (Note: TypeScript >= 1.8 is required)
  type result = "ok" | "fail" | "abort";
  
  // Valid usage
  function compute(n : number) : result {
    if(n === 1) {
      return "ok";
    } else if (n === 2) {
      return "fail";
    } else {
      return "abort";
    }
  }
  
}