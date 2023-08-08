import Token from "../utils/Token"

export default interface ICorreiosTransport{
    
    correioSent() : void;
    correiosRecive() : void;
    authToken() : Token;

   
}