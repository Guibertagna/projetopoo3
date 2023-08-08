import Iitem from "../interfaces/Iitem";
import Location from "./location";
import Game from "../interfaces/Itens/Game"

export default class GameLocation extends Location{
protected createItem(): Iitem{
return new Game();
}
}