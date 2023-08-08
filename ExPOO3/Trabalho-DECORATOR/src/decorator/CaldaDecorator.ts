
import { SorveteDecorator } from "./SorveteDecorator";


export class CaldaDecorator extends SorveteDecorator {

  fazer(): string {
    return this.sorvete.fazer() + " com Calda";
  }
}