import MercadoPago from "../mercadopago/MercadoPago";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment{
    private token : Token;

    constructor(private mercadoPago: MercadoPago){
    console.log("Adaptando mercado apgo em Paypal!")
    }
    
    
    
    
    
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        return this.mercadoPago.sendPaymentMercado();
    }
    paypalReceive(): void {
        return this.mercadoPago.receivePaymentMercado();
    }
}