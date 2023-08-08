import Token from "../utils/Token";
import ICorreiosTransport from "./ICorreiosTransport";

export default class Correios implements ICorreiosTransport{
    private token: Token;
    
    authToken(): Token {
        return new Token();
    }
   
   
    correioSent(): void {
       this.token = this.authToken();
       console.log("Token: "+this.token.token);
       console.log("enviando enviando via Correios");
    }
   
   
    correiosRecive(): void {
        this.token = this.authToken();
       console.log("Token: "+this.token.token);
       console.log("Recebido via Correios");
    }

}