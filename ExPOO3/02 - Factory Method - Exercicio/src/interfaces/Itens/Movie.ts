import Iitem from "../Iitem"

export default class Movie implements Iitem {
    start(): void {
        this.getDescription()
        console.log("Inciando o filme!")
    }

    getDescription(): void {
       console.log("Tipo de filme : ")
    }
}