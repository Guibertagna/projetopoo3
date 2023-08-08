import Token from "../utils/Token";
import IMercadoPagoPayments from "./IMercadoPagoPayment"

export default class MercadoPago implements IMercadoPagoPayments{
    
    private token: Token;

 authToken(): Token {
        return new Token();
    }
    
    
    sendPaymentMercado(): void {
        this.token = this.authToken();
       console.log("Token: "+this.token.token);
       console.log("enviando pagamento via Mercado Pago");
    }
    receivePaymentMercado(): void {
        this.token = this.authToken();
        console.log("Token: "+this.token.token);
        console.log("enviando pagamento via Mercado Pago");
    }

}