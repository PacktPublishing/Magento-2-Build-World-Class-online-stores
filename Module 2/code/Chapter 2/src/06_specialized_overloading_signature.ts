namespace chapter02.specialized_overloading_signature {

  interface Document {
    createElement(tagName : "div") : HTMLDivElement;
    createElement(tagName : "span") : HTMLSpanElement;
    createElement(tagName : "canvas") : HTMLCanvasElement;
    createElement(tagName : string) : HTMLElement;
  }
  
  function createElement(tagName : string) 
    : (HTMLDivElement|HTMLSpanElement|HTMLCanvasElement) {
      
      switch(tagName) {
        case "div" : return new HTMLDivElement();
        case "span" : return new HTMLDivElement();
        case "canvas" : return new HTMLDivElement();
      }
  }
  
  var document : Document;
  var elm1 = document.createElement("div"); // HTMLDivElement
  var elm2 = document.createElement("span"); // HTMLSpanElement
  
}