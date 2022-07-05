import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Grao } from '../models/Grao.model';

@Injectable({
  providedIn: 'root'
})
export class GraoService {

  constructor(private http: HttpClient) { 

  }

  public getGraos():Observable<any>{
    return(this.http.get('http://localhost:3000/graos'));
  }

  public getGrao( id:number):Observable<any>{
    return(this.http.get('http://localhost:3000/graos/' + id));
  }

  public postGrao(grao: Grao):Observable<any>{
    return(this.http.post('http://localhost:3000/graos/',grao));
  }

  public putGrao(grao: Grao, id: number):Observable<any>{
    return(this.http.put('http://localhost:3000/graos/' + id, grao))
  }

  public deleteGrao(id: number):Observable<any>{
    return(this.http.delete('http://localhost:3000/graos/' + id));
  }
}
