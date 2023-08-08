import Facebook from "./plataforms/Facebook";
import IPlataform from "./plataforms/IPlataform";
import Twich from "./plataforms/Twitch";
import Youtube from "./plataforms/Youtube";
import AdvancedLive from "./transmissions/AdvancedLive";

import Live from "./transmissions/Live";

function startLive(plataform : IPlataform){
    console.log("aguarde...");
    const live = new Live(plataform);
    live.broadcasting();
    live.result()
}



function startAdvancedLive(plataform : IPlataform){
    console.log("aguarde...");
    const live = new AdvancedLive(plataform);
    live.broadcasting();
    live.result();
    live.subtitle();
    live.comments();
}


startLive(new Youtube());
startLive(new Twich());
startLive(new Facebook());

startAdvancedLive(new Youtube());
startAdvancedLive(new Twich());
startAdvancedLive(new Facebook());