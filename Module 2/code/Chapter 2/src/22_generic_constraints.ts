namespace chapter02.generic_constraints {
	
	interface IUtils { postAsync<T>(url : string, entity : T) : boolean; }
	declare var utils : IUtils;
	
	class Service<T> {
		
		private _url : string;
		
		constructor(url : string) {
			this._url = url;
		}
		
		save(entity : T) : boolean {
		return utils.postAsync<T>(this._url, entity);
		}
	
	//...
	}
	
	class Client { email : string; }
	var clientService = new Service<Client>("/api/client");
	clientService.save(new Client());
	
	class Order { orderId: number; }
	var orderService = new Service<Order>("/api/order");
	orderService.save(new Order());
	
	interface IValidatable {
		isValid() : boolean;
	}
	
	class ServiceWithConstraint<T extends IValidatable> {
		
		private _url : string;
		
		constructor(url : string) {
		this._url = url;
		}
		
		save(entity : T) : boolean {
		if(entity.isValid()) {
			return utils.postAsync<T>(this._url, entity);
		}
		}
	}
	
	class ValidatableClient implements IValidatable {
		email : string;
		isValid() { return true };
	}
	
	var ValidatableClientService = new Service<ValidatableClient>("/api/client");
	ValidatableClientService.save(new ValidatableClient());
	
	class ValidatableOrder implements IValidatable {
		orderId: number;
		isValid() { return true };
	}
	var validatableOrderService = new Service<ValidatableOrder>("/api/order");
	validatableOrderService.save(new ValidatableOrder());	
		
}