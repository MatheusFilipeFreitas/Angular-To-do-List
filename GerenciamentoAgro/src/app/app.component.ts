import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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
    //this.validaLogin();
  }
  

  validaLogin(){
    if(environment.usuarioLogado){
      this.router.navigate(['/list']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
}
