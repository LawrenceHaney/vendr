export default class Item {
    constructor(name, img, price) {
        this.name = name
        this.img = img
        this.price = price
    }

    get Template() {

        return `
        <div class="card col-4">
            <img class="card-img-top" src=${this.img} alt="" onclick="app.moneyController.pend('${this.name}',${this.price})">
            <div class="card-body">
            <h4 class="card-title">${this.name}</h4>
            <p class="card-text">price: ${this.price}</p>
        </div>
    </div>` }
}