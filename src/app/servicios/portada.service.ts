import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PortadaPersona } from '../model/portada-persona';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

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
    
      return this.http.put<PortadaPersona>(this.urlpost,per,httpOptions);
    }

  
}
