namespace chapter02.IIFEs {
 
  (function() {
    // the code here is executed once in its own scope
  })();
  
  console.log(1,(1)); 
  console.log("test",("test")); 
  console.log(true,(true)); 
  console.log(new Date().getTime(),(new Date().getTime())); 
  
  // Minimal IIFE
  (function() { console.log("test"); })();
  
  // Passing arguments to an IIFE
  (function(global) { global.console.log("test"); })(window);
 
  
}