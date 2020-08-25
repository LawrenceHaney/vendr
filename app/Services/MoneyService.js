import STORE from "../store.js";

//Public
class MoneyService {
  insert(value){
    let user = STORE.State.defultUser
    if (user.wallet > value){
      STORE.State.defultUser.wallet -= value
      STORE.State.defultUser.purchase += value
  } else { console.log("bummer")}
} 
  pend(name, value){
    let user = STORE.State.defultUser
    let target= value
    if(user.purchase >= target)
      STORE.State.defultUser.invantory.push(name)
      STORE.State.defultUser.total -= value
  }

}

const SERVICE = new MoneyService();
export default SERVICE;
