import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './pages/crud/background/background.component';
import { LoginComponent } from './pages/login/login/login.component';
import { LoginCadastroComponent } from './pages/login/login-cadastro/login-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    LoginComponent,
    LoginCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
