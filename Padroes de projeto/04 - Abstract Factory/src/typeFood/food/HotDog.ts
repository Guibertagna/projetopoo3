import IFood from "./interface/IFood"

export default class HotDog implements IFood{
    startDelivery(): void {
        console.log("Preparando o cachorro-quente selecionado!")
        this.getCargo()

    }
    getCargo(): void {
        console.log("Seu cachorro-quente esta pronto e estará a caminho em breve...")
    }
}