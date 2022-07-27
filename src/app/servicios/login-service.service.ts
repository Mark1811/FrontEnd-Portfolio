import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { JwtDTO } from '../model/JwtDto';



@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  UrlAuth = "https://portfolio-back-marcos.herokuapp.com/auth/login";

  currentUserSubject: BehaviorSubject<any>;
  constructor(private httpClient: HttpClient) {
   
  }

  iniciarSesion(usuario: any): Observable<JwtDTO> {
   return this.httpClient.post<JwtDTO>(this.UrlAuth, usuario);
  }


  



}
