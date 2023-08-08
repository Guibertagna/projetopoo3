import IDrink from "./interface/IDrink";

export default class SoftDrink implements IDrink{
    startDelivery(): void {
        console.log("Encontrando o refrigerante selecionado!")
        this.getCargo()
    }
    getCargo(): void {
        console.log("Seu refrigerante foi encontrado e estará a caminho em breve...")
    }
}