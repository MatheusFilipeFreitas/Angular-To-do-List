import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GerenciamentoAgro';

  empresaLogada: boolean;

  constructor(private router: Router){

  }

  ngOnInit(){
    this.validaLogin();
  }
  

  validaLogin(){

    LoginService.empresaLogada.subscribe(
      {
        next:(data:boolean)=>{
          this.empresaLogada = data;
        }
      }
    );

    if(this.empresaLogada){ //Se a empresa está logada ela vai para
      //this.router.navigate(['/home'])
      console.log("Encaminhada para a tela HOME com sucesso");
    }
    else{//Se ela não está logada ela vai para a área de login/cadastro
      this.router.navigate(['/login'])
    }
  }
}
