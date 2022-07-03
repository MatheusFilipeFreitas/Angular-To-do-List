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

  constructor(private router: Router){

  }

  ngOnInit(){
    if(LoginService.empresaLogada){ //Se a empresa está logada ela vai para
      this.router.navigate(['/home'])
    }
    else{//Se ela não está logada ela vai para a área de login/cadastro
      this.router.navigate(['/login'])
    }
  }
  
}
