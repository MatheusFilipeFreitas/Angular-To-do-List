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

    this.loginService.validarLogin(this.login,this.senha)
    
    //pega no service do login se tem empresa logada e popula na variável local
    LoginService.empresaLogada.subscribe(
      {
        next: (data:boolean) => {
          if(data){
            this.router.navigate(['/home'])//Encaminhar para a home
          }
          else{
            //mandar a mensagem do snackbar de falha no login
          }
        }
      }
    );
  }

}
