namespace chapter02.access_modifiers {
	
	class Base {
		
		protected msg = "Protected!";
		
		private _doPrivate() { 
			console.log("Private!"); 
		}
		
		public doPublic() { 
			console.log("Public!"); 
		}
		
		public accessPrivate(){
			this._doPrivate();
		}
		
	}
	
	class Derived extends Base {
		public accessProtected() {
			this.msg;
		}
	}
	
	var derived = new Derived();
	
	// Valid usages
	derived.doPublic();        // OK
	derived.accessPrivate();   // OK
	derived.accessProtected(); // OK
	
	// Invalid usages
	// derived.msg;            // Error
	// derived._doPrivate();   // Error

}