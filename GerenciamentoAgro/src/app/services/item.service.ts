import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { 

  }

  public getItens():Observable<any>{
    return(this.http.get('http://localhost:3000/item'));
  }

  public getItem( id:number):Observable<any>{
    return(this.http.get('http://localhost:3000/item/' + id));
  }

  public postItem(item: Item):Observable<any>{
    return(this.http.post('http://localhost:3000/item/',item));
  }

  public putItem(item: Item, id: number):Observable<any>{
    return(this.http.put('http://localhost:3000/item/' + id, item))
  }

  public deleteItem(id: number):Observable<any>{
    return(this.http.delete('http://localhost:3000/item/' + id));
  }


}
