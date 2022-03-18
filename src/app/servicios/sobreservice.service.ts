import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SobreserviceService {
  
  private url:string ="http://localhost:8080/sobremi/mostrar";

  constructor(private http:HttpClient) { }

  //metodo para obtener datos de la api
  getSobremi():Observable<any>{
    return this.http.get(this.url);
  }
}
