import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Empresa } from '../models/Empresa.model';

@Injectable({
  providedIn: 'root'
})

export class EmpresaService {

  constructor(private http:HttpClient) { 
    
  }

  public getEmpresas():Observable<any>{
    return(this.http.get('http://localhost:3001/empresas'));
  }

  public getEmpresa( id:number):Observable<any>{
    return(this.http.get('http://localhost:3001/empresas/' + id));
  }

  public postEmpresa(empresa: Empresa):Observable<any>{
    return(this.http.post('http://localhost:3001/empresas/',empresa));
  }

  public putEmpresa(empresa: Empresa, id: number):Observable<any>{
    return(this.http.put('http://localhost:3001/empresas/' + id, empresa))
  }

  public deleteEmpresa(id: number):Observable<any>{
    return(this.http.delete('http://localhost:3001/empresas/' + id));
  }
}
