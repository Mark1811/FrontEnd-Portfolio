import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sobremi } from '../model/sobremi';

@Injectable({
  providedIn: 'root'
})
export class SobreserviceService {
  
  private url:string ="http://localhost:8080/sobremi/mostrar";
  private putUrl:string="http://localhost:8080/sobremi/editar";
  constructor(private http:HttpClient) { }

  //metodo para obtener datos de la api
  getSobremi():Observable<any>{
    return this.http.get(this.url);
  }
  
  editDescripcion(des:Sobremi):Observable<Sobremi>{
   return this.http.put<Sobremi>(this.putUrl,des);
  }


}
