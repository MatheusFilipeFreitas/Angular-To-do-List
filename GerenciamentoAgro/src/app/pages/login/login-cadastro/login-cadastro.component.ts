import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/models/Empresa.model';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent implements OnInit {
  empresa: Empresa = new Empresa();
  nome: string;
  cnpj: string;
  endereco: string;
  email: string;
  senha: string;

  constructor(private empresaService: EmpresaService, private router: Router) {
  }

  ngOnInit(): void {

  }

  cadastrar(){
    this.empresa.popular(0,this.nome,this.email,this.cnpj,this.endereco,this.senha);    

    this.empresaService.postEmpresa(this.empresa).subscribe(
      {
        next: (data: Empresa) => {console.log("Empresa cadastrada com sucesso >> ", data); this.router.navigate(['/login'])},
        error: (error: any) => {console.log("Erro >> " + error)}
      }
    )
    this.router.navigate(['/login/cadastro']);
  }

}
