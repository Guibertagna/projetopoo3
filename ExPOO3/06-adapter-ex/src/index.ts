import Correios from "./correios/Correios";
import ICorreiosTransport from "./correios/ICorreiosTransport";

const envio : ICorreiosTransport = new Correios();
envio.correioSent();
envio.correiosRecive();

const envio2 : ICorreiosTransport = new Correios();
envio2.correioSent();
envio2.correiosRecive();

const envio3 : ICorreiosTransport = new Correios();
envio3.correioSent();
envio3.correiosRecive();