export default class User {
    constructor(name) {
        this.name = name
        this.invantory = []
        this.wallet = 100
        this.purchase = 0
        this.total = 0
    }

    get Template() {
        let usertemplate = `
        <p class="col-12">you have ${this.wallet} </p>
        <p class="col-12">you've put in ${this.purchase}</p>
        `
        this.invantory.forEach(e => {
            usertemplate += `<p>"${this.invantory[e]}"</p>`
            
        });
        return usertemplate }
}