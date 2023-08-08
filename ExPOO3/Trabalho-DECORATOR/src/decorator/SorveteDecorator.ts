import ISorvete from "../sorvete/ISorvete";


export abstract class SorveteDecorator implements ISorvete {
  constructor(protected sorvete: ISorvete) {}
  
  abstract fazer(): string;
}