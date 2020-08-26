import STORE from "../store.js";
import Pizza from "../Models/Pizza.js";
class PizzasService {
  constructor() {
    console.log("pizza service");
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
  addTopping(id, toppingToAdd) {
    let pizza = STORE.State.pizzas.find(p => p.id == id)
    pizza.toppings.push(toppingToAdd)
  }
  deleteTopping(tName, pizzaId) {
    let pizza = STORE.State.pizzas.find(p => p.id == pizzaId)
    let toppingIndex = pizza.toppings.findIndex(t => t == tName)
    pizza.toppings.splice(toppingIndex, 1)

  }
}
const PIZZA_SERVICE = new PizzasService();
export default PIZZA_SERVICE