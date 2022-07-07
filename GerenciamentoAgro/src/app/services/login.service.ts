import { Injectable, EventEmitter} from '@angular/core';
import { Empresa } from '../models/Empresa.model';
import { EmpresaService } from './empresa.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  empresasCadastradas: Empresa[];

  constructor(private empresaService: EmpresaService, private router: Router) { 
  }

  ngOnInit(){

  }

  validarLogin(login: string, senha: string){

    this.empresaService.getEmpresas().subscribe(
      {
        next:(data: Empresa[])=>{
          data.forEach(
            (emp)=>{
              if((login == emp.email) && (senha == emp.senha)){
                environment.empresaLogada = true;
                console.log("Login realizado com sucesso");
                this.router.navigate([''])
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
