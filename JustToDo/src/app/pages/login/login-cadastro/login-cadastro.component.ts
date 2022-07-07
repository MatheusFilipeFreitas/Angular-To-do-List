import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent implements OnInit {
  usuario: Usuario = new Usuario();
  nome: string;
  email: string;
  senha: string;

  constructor(private usuarioService: UsuarioService, private router: Router) {
  }

  ngOnInit(): void {

  }

  cadastrar(){
    this.usuario.popular(0,this.nome,this.email,this.senha);    

    this.usuarioService.postUsuario(this.usuario).subscribe(
      {
        next: (data: Usuario) => {console.log("Usuario cadastrado com sucesso >> ", data); this.router.navigate(['/login'])},
        error: (error: any) => {console.log("Erro >> " + error)}
      }
    )
    this.router.navigate(['/login/cadastro']);
  }

}
