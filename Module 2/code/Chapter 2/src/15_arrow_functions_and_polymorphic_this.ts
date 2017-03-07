namespace chapter02.arrow_functions_and_polymorphic_this {
	
	// Showcase error caused by this operator
	class FormWithoutArrowFunctions {
		
		constructor(){
			this.initializeEvents();
		}
		
		initializeEvents() {
			$("#submitBtn").on("click", function() {
				this.onSubmit(); // Error
			});
		}
		
		onSubmit() {
			console.log("clicked");
		}
	}
	
	// Showcase how to use arrow function to fix errors caused by this operator
	class FormWithArrowFunctions {
	
		constructor(){
			this.initializeEvents();
		}
		
		initializeEvents() {
			$("#submitBtn").on("click", () => {
				this.onSubmit(); // OK
			});
		}
		
		onSubmit() {
			console.log("clicked");
		}
	}
	
	// Declaring fluent interface using polymorphic this operator (Note: requires TypeScript 1.7)
	class Binding {
		
		private _scope : string;
		
		inSingletonScope() : this {
		this._scope = "singleton";
		return this;
		}
		
		public inTransientScope() : this {
		this._scope = "transient";
		return this;
		}
		
		public onActivation(cb : () => void) {
		cb();
		}
	}
	
	// Fluent interface usage
	var binding = new Binding().inSingletonScope().onActivation(() => {
	console.log("activating...");
	});

}