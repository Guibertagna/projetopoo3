import Iitem from "../interfaces/Iitem";
import Location from "./location";
import Movie from "../interfaces/Itens/Movie"

export default class MovieLocation extends Location{
protected createItem(): Iitem{
return new Movie();
}
}