import {action, observable} from "mobx";


class Store {
   @observable counter = 0;

   @action Increment = () => {
      this.counter += 1
   }
   @action Decrement = () => {
      this.counter -= 1
   }
}

export default new Store();