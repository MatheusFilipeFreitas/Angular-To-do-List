import { Injectable, EventEmitter} from '@angular/core';
import { Empresa } from '../models/Empresa.model';
import { EmpresaService } from './empresa.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  empresasCadastradas: Empresa[];
  static empresaLogada = new EventEmitter<boolean>();
  static empresa = new EventEmitter<Empresa>();

  constructor(private empresaService: EmpresaService) { 

  }

  ngOnInit(){

  }

  validarLogin(login: string, senha: string){
    LoginService.empresaLogada.emit(false);

    this.empresaService.getEmpresas().subscribe(
      {
        next:(data: Empresa[])=>{
          data.forEach(
            (emp)=>{
              if((login == emp.email) && (senha == emp.senha)){
                LoginService.empresaLogada.emit(true);//popula que a empresa existe e está logada
                LoginService.empresa.emit(emp); //popula os dados da empresa
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
