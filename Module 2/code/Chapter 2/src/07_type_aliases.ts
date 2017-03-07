namespace chapter02.type_aliases {
 
  function doSomethingAsync1(args : any, cb : (result : any) => void) {
    // …
  }
  
  // Declaring a type alias
  type callback = (result : any) => void;
  
  // Using a type alias
  function doSomethingAsync2(args : any, cb : callback) {
    // …
  }
  
  doSomethingAsync1({ /* … */ }, (result : any) => {
    console.log(result);
  });
  
  doSomethingAsync2({ /* … */ }, (result : any) => {
    console.log(result);
  });
  
}