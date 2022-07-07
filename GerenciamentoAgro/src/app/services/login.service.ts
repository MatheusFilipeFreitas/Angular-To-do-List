import { Injectable, EventEmitter} from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from './usuario.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuariosCadastrados: Usuario[];

  constructor(private usuarioService: UsuarioService, private router: Router) { 
  }

  ngOnInit(){

  }

  validarLogin(login: string, senha: string){

    this.usuarioService.getUsuarios().subscribe(
      {
        next:(data: Usuario[])=>{
          data.forEach(
            (us)=>{
              if((login == us.email) && (senha == us.senha)){
                environment.usuarioLogado = true;
                console.log("Login realizado com sucesso");
                this.router.navigate(['/list'])
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
