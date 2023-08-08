
import { SorveteDecorator } from "./SorveteDecorator";


export class ChantillyDecorator extends SorveteDecorator {

  fazer(): string {
    return this.sorvete.fazer() + " com Chantilly";
  }
}