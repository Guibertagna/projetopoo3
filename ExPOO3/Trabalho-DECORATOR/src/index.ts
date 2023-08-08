import { SorveteChocolate } from './sorvete/SorveteChocolate';
import { SorveteBaunilha } from './sorvete/SorveteBaunilha';
import { GranuladoDecorator } from './decorator/GranuladoDecorator';
import { CaldaDecorator } from './decorator/CaldaDecorator';
import { ChantillyDecorator } from './decorator/ChantillyDecorator';
import ISorvete from './sorvete/ISorvete';




const meuSorvete: SorveteBaunilha = new SorveteBaunilha();
console.log(meuSorvete.fazer());

const sorveteDecorado: ISorvete = new GranuladoDecorator(new ChantillyDecorator(new CaldaDecorator(new SorveteChocolate())));
console.log(sorveteDecorado.fazer());
