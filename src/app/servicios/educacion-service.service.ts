import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Educacion } from '../model/educacion';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EducacionServiceService {
  private ulrMost:string="http://localhost:8080/edu/mostrar";
  private ulrCrea:string="http://localhost:8080/edu/crear";
  private ulrEdit:string="http://localhost:8080/edu/editar";
  private ulrDelete:string="http://localhost:8080/edu/eliminar";
  private _refresh$ = new Subject<void>()

  constructor(private http:HttpClient) { }
  get refresh$(){
    return this._refresh$;
  }
  

  //Mostrar Educacion
   getEdu():Observable<any>{
     return this.http.get(this.ulrMost);
   }

  //Crear Educacion
   crearEdu(edu:Educacion):Observable<Educacion>{
     return this.http.post<Educacion>(this.ulrCrea,edu)
     .pipe(
      tap(()=>{
        this._refresh$.next(); // metodo para atualizar la àgina antes de que guarde
      })
    )
   }

   editEdu(edu:Educacion):Observable<Educacion>{
     return this.http.put<Educacion>(this.ulrEdit,edu);
   }
   
   deleteEdu(id:number):Observable<Educacion>{
     return this.http.delete<Educacion>(this.ulrDelete +'/' +id);
   }

}
