import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayoneerAdapter from "./adapters/PayoneerAdapter";
import MercadoPago from "./mercadopago/MercadoPago";
import Payoneer from "./payoneer/Payoneer";
import IPayPalPayment from "./paypal/IPayPalPayment";
import Paypal from "./paypal/PayPal";

const payment: IPayPalPayment = new Paypal();
payment.paypalPayment();
payment.paypalReceive();

const payment2 : IPayPalPayment = new PayoneerAdapter(new Payoneer);
payment2.paypalPayment();
payment2.paypalReceive();


const payment3 : IPayPalPayment = new MercadoPagoAdapter(new MercadoPago);
payment3.paypalPayment();
payment3.paypalReceive();