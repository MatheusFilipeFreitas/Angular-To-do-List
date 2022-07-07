import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCadastroComponent } from './pages/login/login-cadastro/login-cadastro.component';
import { LoginComponent } from './pages/login/login/login.component';
// import { LoginGuard } from './guards/login.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'login',component: LoginComponent},
  // {path:'list',component: LoginComponent, canActivate:[LoginGuard]},
  {path:'login/cadastro',component: LoginCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
