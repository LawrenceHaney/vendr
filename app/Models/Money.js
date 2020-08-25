export default class Money {
    constructor(name, image, value) {
        this.name = name
        this.img = image
        this.value = value
    }

    get Template() {
        return `
        <div class="card">
        <img class="card-img-top" src="${this.img}" alt="" onclick="app.MoneyController.insert()">
        <div class="card-body">
        <h4 class="card-title">${this.name}</h4>
        <p class="card-text">$ ${this.value}</p>
        </div>
        </div>`
    }
}