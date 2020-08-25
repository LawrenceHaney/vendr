import MoneyService from "../Services/MoneyService.js";
import STORE from "../store.js";

function _drawMoney(){
  let quarter = STORE.State.moneyQuarter
  let dollar = STORE.State.moneyDollar
  let templateholder = ''
  templateholder += quarter.Template
  templateholder += dollar.Template
  document.getElementById("money").innerHTML = templateholder
}
function _drawUser(){
  document.getElementById("user").innerHTML = STORE.State.defultUser.Template
}
function _drawItems(){
  document.getElementById("vend").innerHTML = STORE.State.defultItem.Template
}
//Public
export default class MoneyController {
  constructor() {
    _drawMoney()
    _drawUser()
    _drawItems()
  }

  insert(value) {
    MoneyService.insert(value)
    _drawUser()
  }

  pend(name, value){
    MoneyService.pend(name, value)
    _drawUser
  }
}
