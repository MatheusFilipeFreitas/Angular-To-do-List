import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login/login.component';
import { LoginCadastroComponent } from './pages/login/login-cadastro/login-cadastro.component';
import { ListComponent } from './pages/list/list.component';
import {MatInputModule} from '@angular/material/input';
import { NewComponent } from './pages/new/new.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginCadastroComponent,
    ListComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
