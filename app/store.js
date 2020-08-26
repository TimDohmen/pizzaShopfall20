import Value from "./Models/Value.js";
import Pizza from "./Models/Pizza.js";

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  pizzas: [new Pizza({ name: "first Pizza" })]
};

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("pizzas"));
  if (data) {
    data.pizzas = data.pizzas.map(p => new Pizza(p));
    _state = data;
  }
}
_loadState();

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
  saveState() {
    localStorage.setItem("pizzas", JSON.stringify(_state));
  }
}

const STORE = new Store();
export default STORE;
