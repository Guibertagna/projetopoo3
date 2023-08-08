import IDrinkFoods from "./interface/Idrink";

export default class SoftDrink implements IDrinkFoods{
   startDelivery(): void {
      
      console.log("Buscando o refrigerante")
      this.getCargo();
       
     }
     getCargo(): void{
        console.log("Refrigerante retirada, indo até você")
     }
}