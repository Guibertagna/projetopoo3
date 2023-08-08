import IConsole from "./consoles/IConsole";
import PlayStation from "./consoles/PlayStation";
import Xbox from "./consoles/Xbox";
import AdvancedPlay from "./games/AdvancedPlay";
import Play from "./games/Play";

function startGame(consoles: IConsole){
    const play = new Play(consoles);
    play.playing();
    play.result();

}

function startAdvancedPlay(consoles: IConsole){
    console.log("AGUARDE...")
    const play = new AdvancedPlay(consoles);
    play.playing();
    play.result();
    play.challenge();
    
}


startGame(new Xbox);
startGame(new PlayStation);
startAdvancedPlay(new Xbox);
startAdvancedPlay(new PlayStation);



