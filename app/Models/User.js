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
        <p class="col-12">current total: ${this.total}</p>
        `
        let arr= this.invantory
        for (let e =0; e < arr.length; e++){
            usertemplate += `<p class="col-1>(${this.invantory}[${e}])</p>`
        }
            
        
        return usertemplate }
}