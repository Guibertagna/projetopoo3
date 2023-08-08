import { SorveteDecorator } from "./SorveteDecorator";


export  class GranuladoDecorator extends SorveteDecorator {

  fazer(): string {
    return this.sorvete.fazer() + " com Granulado";
  }
}