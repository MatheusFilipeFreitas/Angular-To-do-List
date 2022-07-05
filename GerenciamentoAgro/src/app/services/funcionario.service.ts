import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Funcionario } from '../models/Funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http:HttpClient) { 

  }

  public getFuncionarios():Observable<any>{
    return(this.http.get('http://localhost:3000/funcionarios'));
  }

  public getFuncionario( id:number):Observable<any>{
    return(this.http.get('http://localhost:3000/funcionarios/' + id));
  }

  public postFuncionario(funcionario: Funcionario):Observable<any>{
    return(this.http.post('http://localhost:3000/funcionarios/',funcionario));
  }

  public putFuncionario(funcionario: Funcionario, id: number):Observable<any>{
    return(this.http.put('http://localhost:3000/funcionarios/' + id, funcionario))
  }

  public deleteFuncionario(id: number):Observable<any>{
    return(this.http.delete('http://localhost:3000/funcionarios/' + id));
  }
}
