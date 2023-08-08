import IFood from "./interface/IFood"

export default class Hamburger implements IFood{
    startDelivery(): void {
        console.log("Preparando o hamburger selecionado!")
        this.getCargo()
    }
    getCargo(): void {
        console.log("Seu hamburger esta pronto e estará a caminho em breve...")
    }
}