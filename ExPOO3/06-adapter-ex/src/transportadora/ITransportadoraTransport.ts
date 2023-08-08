import Token from "../utils/Token";

export default interface ITransportadoraTransport{
    
    authToken() : Token;

    sendEncomenda() : void;

    receiveEncomenda() : void
}