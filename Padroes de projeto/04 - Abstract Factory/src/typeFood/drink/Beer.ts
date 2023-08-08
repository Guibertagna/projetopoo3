import IDrink from "./interface/IDrink";

export default class Beer implements IDrink{
    startDelivery(): void {
        console.log("Encontrando a cerveja selecionada!")
        this.getCargo();
  
    }
    getCargo(): void {
        console.log("Sua cerveja foi encontrada e estará a caminho em breve...")
    }
}