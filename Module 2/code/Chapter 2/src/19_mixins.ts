namespace chapter02.mixins {
  
  // To create mixins we need to declare the following function somewhere in our code base
  function applyMixins(derivedCtor: any, baseCtors: any[]) {
      baseCtors.forEach(baseCtor => {
          Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
              derivedCtor.prototype[name] = baseCtor.prototype[name];
          });
      });
  }
  
  class Climbs {
    climb() {
      alert('My spider-sense is tingling.');
    }
  }
  
  class Bulletproof {
    deflect() {
      alert('My wings are a shield of steel.');
    }
  }
  
  class BeetleGuy implements Climbs, Bulletproof {
    climb: () => void;
    deflect: () => void;
  }
  
  applyMixins(BeetleGuy, [Climbs, Bulletproof]);
  
  var beetleGuy = new BeetleGuy();  
  
}