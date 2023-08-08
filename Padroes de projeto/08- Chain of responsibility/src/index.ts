import checkPermissionMiddleware from "./middleware/CheckPermissionMiddleware";
import checkUserMiddleware from "./middleware/CheckUserMiddleware";
import CheckWeekMiddleare from "./middleware/CheckWeekMiddleware";
import Server from "./server/Server";
import * as readline from "readline"; 

declare var process;
const server = new Server();
function setPromptQuestion(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.question("Digite seu email: ", email =>{
        rl.question("Digite sua senha: ", password =>{
            server.logIn(email,password);
            rl.close();
        })
    })
    rl.on("close", () => setPromptQuestion())

}


const middleware = new checkUserMiddleware();
middleware.linkWith(new checkPermissionMiddleware());
middleware.linkWith(new CheckWeekMiddleare());
server.setMiddleware(middleware);
setPromptQuestion();