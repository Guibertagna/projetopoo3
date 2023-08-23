import { Component } from '@angular/core';
import { Router } from '@angular/router';

import Contato from 'src/app/model/entities/Contato';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listaContatos : Contato[] = [];
  constructor( private router: Router, private contatoService : ContatoService) {
    this.listaContatos = this.contatoService.obterTodos();
  }


  irParaCadastrar(){
    this.router.navigate(["/cadastrar"])
  }

  editar(index : number){
    this.router.navigate(["/detalhar", index])
  }
}
