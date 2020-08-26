import { generateId } from "../Utils.js"
export default class Pizza {
  constructor(data) {
    this.name = data.name
    this.id = data.id || generateId()
  }

  get Template() {
    return /*html*/`
    <div class="card col-3">
                <div class="card-body d-flex flex-column">
                <i class="fa fa-trash align-self-end action" aria-hidden="true" onclick="app.pizzasController.deletePizza('${this.id}')"></i>
                    <h4 class="card-title">${this.name} </h4>
                    
                    <ul>
                        <li>Cheese</li>
                        <li>Pepperoni</li>
                    </ul>
                </div>
            </div>
    `
  }
}