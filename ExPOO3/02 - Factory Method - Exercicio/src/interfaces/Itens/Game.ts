import Iitem from "../Iitem"

export default class Game implements Iitem {
    start(): void {
        this.getDescription()
        console.log("Iniciando o jogo!")
    }

    getDescription(): void {
       console.log("Jogo de Ação")
    }
}