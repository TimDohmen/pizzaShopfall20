import Value from "./Models/Value.js";
import Pizza from "./Models/Pizza.js";

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  pizzas: [new Pizza({ name: "first Pizza" })]
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
