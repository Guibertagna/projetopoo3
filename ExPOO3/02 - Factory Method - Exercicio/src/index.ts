import GameLocation from "./Locations/GameLocation";
import MovieLocation from "./Locations/MovieLocations";
import Location from "./Locations/location";

declare var process;

let location : Location

if (process.argv.includes("--GameSt")) {
    location = new GameLocation()
} else if (process.argv.includes("--Cine")) {
    location = new MovieLocation()
} else {
    console.error("O uber se perdeu :(")
}
