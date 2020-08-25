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


//Public
export default class MoneyController {
  constructor() {
    _drawMoney()
  }

  insert() {
    console.log("ok form mc")
    MoneyService.insert()
    _drawMoney()
  }
}
