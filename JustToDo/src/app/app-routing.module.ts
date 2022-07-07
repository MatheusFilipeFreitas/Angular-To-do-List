import { ListComponent } from './pages/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCadastroComponent } from './pages/login/login-cadastro/login-cadastro.component';
import { LoginComponent } from './pages/login/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { AppComponent } from './app.component';
import { HistoryComponent } from './pages/history/history.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login',component: LoginComponent},
  {path:'list',component: ListComponent, /*canActivate:[LoginGuard]*/},
  {path:'logon',component: LoginCadastroComponent},
  {path:'history',component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
