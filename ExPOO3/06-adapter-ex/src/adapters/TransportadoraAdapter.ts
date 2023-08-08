
import ICorreiosTransport from "../correios/ICorreiosTransport";
import Transportadora from "../transportadora/Transportadora";
import Token from "../utils/Token";

export default class TransportadoraAdapter implements ICorreiosTransport{
    private token : Token;
    constructor(private transportdora : Transportadora){
        console.log("Adaptando Correios para Transportadora!")

    }
    correioSent(): void {
       return this.transportdora.sendEncomenda();
    }
    correiosRecive(): void {
        return this.transportdora.receiveEncomenda();
    }
    authToken(): Token {
        return new Token();
    }

    
}