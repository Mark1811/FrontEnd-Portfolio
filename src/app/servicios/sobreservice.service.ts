import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sobremi } from '../model/sobremi';

@Injectable({
  providedIn: 'root'
})
export class SobreserviceService {
  
  private baseUrl:string ="https://portfolio-back-marcos.herokuapp.com/sobremi";
  
  constructor(private http:HttpClient) { }

  //metodo para obtener datos de la api
  getSobremi():Observable<any>{
    return this.http.get(this.baseUrl+"/"+"mostrar");
  }
  getMostraId(id:number){
    return this.http.get<Sobremi>(this.baseUrl+"/"+id);
  }
  
  editDescripcion(des:Sobremi):Observable<Sobremi>{
   return this.http.put<Sobremi>(this.baseUrl+"/"+"editar",des);
  }


}
