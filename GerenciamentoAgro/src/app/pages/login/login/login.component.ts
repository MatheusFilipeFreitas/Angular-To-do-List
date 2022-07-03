import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string;
  senha: string;

  constructor(private loginService: LoginService, private router: Router) { 
  }

  ngOnInit(): void {

  }

  logar(){
    console.log(this.loginService.validarLogin(this.login, this.senha));
    if(LoginService.empresaLogada){
      this.router.navigate(['/']);
      console.log("chegou")
    }
  }

}
