import Token from "../utils/Token";
import ITransportadoraTransport from "./ITransportadoraTransport";

export default class Transportadora implements ITransportadoraTransport{
    private token : Token;
    
    authToken(): Token {
        return new Token();
    }
    sendEncomenda(): void {
        this.token = this.authToken();
       console.log("Token: "+this.token.token);
       console.log("enviando encomenda via Transportadora");
    }
    receiveEncomenda(): void {this.token = this.authToken();
        console.log("Token: "+this.token.token);
        console.log("enviando encomenda via Transportadora");
    }

}