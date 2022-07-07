import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private http:HttpClient) { 
    
  }

  public getUsuarios():Observable<any>{
    return(this.http.get('http://localhost:3000/usuario'));
  }

  public getUsuario( id:number):Observable<any>{
    return(this.http.get('http://localhost:3000/usuario/' + id));
  }

  public postUsuario(usuario: Usuario):Observable<any>{
    return(this.http.post('http://localhost:3000/usuario/',usuario));
  }

  public putUsuario(usuario: Usuario, id: number):Observable<any>{
    return(this.http.put('http://localhost:3000/usuario/' + id, usuario))
  }

  public deleteUsuario(id: number):Observable<any>{
    return(this.http.delete('http://localhost:3000/usuario/' + id));
  }
}
