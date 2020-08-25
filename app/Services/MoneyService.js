import STORE from "../store.js";

//Public
class MoneyService {
  purchase() {
    if(STORE.State.defultUser.total <= STORE.State.defultUser.purchase)
    {STORE.State.defultUser.purchase -= STORE.State.defultUser.total
    STORE.State.defultUser.total == 0
    STORE.State.defultUser.invantory.splice(0, STORE.State.defultUser.invantory.length)
    console.log(STORE.State.defultUser)
    }else{console.log("I can't let you do that Dave")}
    ;
  }
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
    let tname= name
    if(user.purchase >= target){
      STORE.State.defultUser.invantory.push(tname)
      STORE.State.defultUser.total += value
      console.log(STORE.State.defultUser)
    }
  } 
}

const SERVICE = new MoneyService();
export default SERVICE;
