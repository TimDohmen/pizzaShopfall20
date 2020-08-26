import _pizzaServ from "../Services/PizzaService.js"
import STORE from "../store.js"


function _drawPizzas() {
  let template = ""
  STORE.State.pizzas.forEach(p => template += p.Template)
  document.getElementById("pizzaZone").innerHTML = template
}

export default class PizzasController {
  constructor() {
    console.log("pizza controller!")
    _drawPizzas()
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
    STORE.saveState()
  }
  deletePizza(id) {
    console.log(id)
    _pizzaServ.deletePizza(id)
    _drawPizzas()
    STORE.saveState()
  }
  addTopping(event, id) {
    event.preventDefault()
    console.log(id)
    let toppingToAdd = event.target.topping.value
    _pizzaServ.addTopping(id, toppingToAdd)
    _drawPizzas()
    STORE.saveState()
  }
  deleteTopping(tName, pizzaId) {
    console.log(tName, pizzaId)
    _pizzaServ.deleteTopping(tName, pizzaId)
    _drawPizzas()
    STORE.saveState()
  }
}