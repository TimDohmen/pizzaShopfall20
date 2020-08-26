import STORE from "../store.js";
import Pizza from "../Models/Pizza.js";
class PizzasService {

  constructor() {
    console.log("pizz serv");
    console.log(STORE.State.pizzas)
  }
  createPizza(pizzaName) {
    let newZa = new Pizza(pizzaName)
    console.log(newZa)
    STORE.State.pizzas.push(newZa)
  }
  deletePizza(id) {
    STORE.State.pizzas = STORE.State.pizzas.filter(p => p.id != id)
  }
}
const PIZZA_SERVICE = new PizzasService();
export default PIZZA_SERVICE