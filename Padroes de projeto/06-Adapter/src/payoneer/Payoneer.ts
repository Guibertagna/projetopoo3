
import Token from "../utils/Token";
import IPayoneerPayment from "./IPayoneerPayment";

export default class Payoneer implements IPayoneerPayment{
  
    private token: Token;
    
    
    authToken(): Token {
        return new Token();
    }
    
    
    sendPayment(): void {
        this.token = this.authToken();
       console.log("Token: "+this.token.token);
       console.log("enviando pagamento via payoneer");
    }
   
   
    receivePayment(): void {
        this.token = this.authToken();
        console.log("Token: "+this.token.token);
        console.log("enviando pagamento via payoneer");
    }

}