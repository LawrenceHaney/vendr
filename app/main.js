import MoneyController from "./Controllers/MoneyControler.js";

class App {
  moneyController = new MoneyController();
}

window["app"] = new App();
