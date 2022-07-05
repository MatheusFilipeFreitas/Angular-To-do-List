import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Fazenda } from '../models/Fazenda.model';

@Injectable({
  providedIn: 'root'
})
export class FazendaService {

  constructor(private http:HttpClient) { 

  }

  public getFazendas():Observable<any>{
    return(this.http.get('http://localhost:3000/fazendas'));
  }

  public getFazenda( id:number):Observable<any>{
    return(this.http.get('http://localhost:3000/fazendas/' + id));
  }

  public postFazenda(fazenda: Fazenda):Observable<any>{
    return(this.http.post('http://localhost:3000/fazendas/',fazenda));
  }

  public putFazenda(fazenda: Fazenda, id: number):Observable<any>{
    return(this.http.put('http://localhost:3000/fazendas/' + id, fazenda))
  }

  public deleteFazenda(id: number):Observable<any>{
    return(this.http.delete('http://localhost:3000/fazendas/' + id));
  }


}
