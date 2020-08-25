import Money from "./Models/Money.js";

let _state = {
  moneyQuarter: new Money("quarter", "http://placehold.it/100x100", .25),
  moneyDollar: new Money("dollar", "http://placehold.it/200x100", 1)
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
