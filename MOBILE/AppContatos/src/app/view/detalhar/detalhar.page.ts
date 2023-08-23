import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Contato from 'src/app/model/entities/Contato';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  contato: Contato;
  indice : number;
  nome: string;
  email: string;
  telefone: number;
  edicao: boolean = true;
  
  constructor(private actRoute : ActivatedRoute, private contatoService : ContatoService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.actRoute.params.subscribe((parametros) => {
      if(parametros["indice"]){
       this.indice = parametros["indice"];
       this.contato =
        this.contatoService.obterPorIndice(this.indice);
       
      }
      this.nome = this.contato.nome
      this.email = this.contato.email
      this.telefone = this.contato.telefone
    })
  
    console.log(this.contato);
  }
 
  
  
  habilitar(){
    if(this.edicao){
      this.edicao=false;
    }else{
      this.edicao=true
    }
  }
  confirmar(){
    this.confirmDelete()
    
  }
  
  excluir(){
    
    
    this.contatoService.excluir(this.indice);
    this.router.navigate(["/home"])
  }


 editar(){
    if(this.nome && this.telefone){
    let novo : Contato =  new Contato(this.nome, this.telefone, this.email);
    this.contatoService.editar(this.indice,novo);
    this.router.navigate(["/home"])
    this.presentAlert("Salvo", "As edições foram salvas");
    }
    else{
      this.presentAlert("Erro", "Campos Nome e Telefone Obrigatórios!");
    }

  }

  async confirmDelete() {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Você realmente deseja excluir este contato?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Operação de exclusão cancelada.');
          }
        },
        {
          text: 'Excluir',
          handler: () => {
            this.excluir();
          }
        }
      ]
    });
    await alert.present();
  }
  


  async presentAlert(header: string, message: string){
    const alert = await this.alertController.create({
      header: header,
      subHeader: 'Agenda de Contatos',
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
