import { Injectable } from '@angular/core';
import { Empresa } from '../models/Empresa.model';
import { EmpresaService } from './empresa.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  empresasCadastradas: Empresa[];
  static empresaLogada: boolean = false;
  static empresa: Empresa;

  constructor(private empresaService: EmpresaService) { 

  }

  ngOnInit(){

  }

  validarLogin(login: string, senha: string){
    LoginService.empresaLogada = false;
    this.empresaService.getEmpresas().subscribe(
      {
        next:(data: Empresa[])=>{
          data.forEach(
            (emp)=>{
              if((login == emp.email) && (senha == emp.senha)){
                LoginService.empresaLogada = true;
                LoginService.empresa = emp;
                console.log("Login realizado com sucesso");
              }
            }
          );
        },
        error:(error: any)=>{
          console.log("Erro no login >> " + error);
        }
      }
    );    
  }
}
