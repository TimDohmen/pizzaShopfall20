import _pizzaServ from "../Services/PizzaServie.js"
import STORE from "../store.js"


function _drawPizzas() {
  let template = ""
  STORE.State.pizzas.forEach(p => template += p.Template)
  document.getElementById("pizzaZone").innerHTML = template
}

export default class PizzasController {
  constructor() {
    console.log("pizza controller!")
  }
  createPizza(event) {
    event.preventDefault()
    console.log("creating")
    console.log(event.target.name.value)
    let newPizza = {
      name: event.target.name.value
    }
    _pizzaServ.createPizza(newPizza)
    _drawPizzas()
  }
}