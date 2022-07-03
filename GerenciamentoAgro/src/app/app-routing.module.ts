import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCadastroComponent } from './pages/login/login-cadastro/login-cadastro.component';
import { LoginComponent } from './pages/login/login/login.component';

const routes: Routes = [
  //{path:"",component: LoginComponent},
  {path:"login",component: LoginComponent},
  {path:"login/cadastro",component: LoginCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
