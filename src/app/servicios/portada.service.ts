import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PortadaPersona } from '../model/portada-persona';

@Injectable({
  providedIn: 'root'
})
export class PortadaService {
  private url:string ="http://localhost:8080/mostrar";
  private urlpost:string="http://localhost:8080/editar"

  constructor(private http: HttpClient) {}

  
   getPersona():Observable<PortadaPersona[]>{
     
     return this.http.get<PortadaPersona[]>(this.url);
   }
  
    editarPersona(per:PortadaPersona):Observable<PortadaPersona>{
      const apiUrl =`${this.urlpost}/${per.id}`
      return this.http.put<PortadaPersona>(apiUrl,per);
    }

  
}
