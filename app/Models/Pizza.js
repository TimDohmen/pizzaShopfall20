import { generateId } from "../Utils.js"
export default class Pizza {
  constructor(data) {
    this.name = data.name
    this.id = data.id || generateId()
    this.toppings = data.toppings || []
  }

  get Template() {
    return /*html*/`
    <div class="card col-3">
                <div class="card-body d-flex flex-column">
                <i class="fa fa-trash align-self-end action" aria-hidden="true" onclick="app.pizzasController.deletePizza('${this.id}')"></i>
                    <h4 class="card-title">${this.name}</h4>
                    <ul>
                        ${this.Toppings}
                    </ul>
                    <form onsubmit="app.pizzasController.addTopping(event, '${this.id}')">
                    <div class="form-group d-flex">
                      <input type="text"
                        class="form-control" name="topping" id="topping" aria-describedby="helpId" placeholder="Enter Toppings">
                        <button class="btn btn-warning" type="submit">
                                Add
                        </button>
                    </div>
                    </form>
                </div>
            </div>
    `
  }
  get Toppings() {
    let template = ""
    this.toppings.forEach(t => {
      template += /*html*/`<li>${t} <i class="fa fa-times" onclick="app.pizzasController.deleteTopping('${t}', '${this.id}')" aria-hidden="true"></i> </li>`
    });
    return template
  }
}