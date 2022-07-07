import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string;
  senha: string;
  empresaLogada:boolean;

  constructor(private loginService: LoginService, private router: Router) { 
  }

  ngOnInit(): void {
    this.empresaLogada = environment.empresaLogada;
    this.validarLogin();
  }

  validarLogin(){

    if(this.empresaLogada){
      this.router.navigate([''])
    }

  }

  logar(){
    this.loginService.validarLogin(this.login,this.senha);  
  }

}
