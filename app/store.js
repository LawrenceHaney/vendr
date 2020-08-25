import Money from "./Models/Money.js";
import User from "./Models/User.js";
import Item from "./Models/Item.js";

let _state = {
  moneyQuarter: new Money("quarter", "http://placehold.it/100x100", .25),
  moneyDollar: new Money("dollar", "http://placehold.it/200x100", 1),
  defultUser: new User("Dave"),
  defultItem: new Item("Junk", "http://placehold.it/50x50", .25)
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
