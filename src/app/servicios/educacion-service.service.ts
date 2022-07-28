import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Educacion } from '../model/educacion';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EducacionServiceService {
  private ulrBase:string="https://portfolio-back-marcos.herokuapp.com/edu";
  private _refresh$ = new Subject< void >()

  constructor(private http:HttpClient) { }
  get refresh$(){
    return this._refresh$;
  }
  

  //Mostrar Educacion
   getEdu():Observable<any>{
     return this.http.get(this.ulrBase+"/"+"mostrar");
   }

  //Crear Educacion
   crearEdu(obj:Educacion){
     return this.http.post<Educacion>(this.ulrBase+"/"+"crear",obj)
      .pipe(
      tap(()=>{
        this._refresh$.next(); // metodo para atualizar la àgina antes de que guarde
      })
    )
   }
  
   editEdu(edu:Educacion):Observable<Educacion>{
     return this.http.put<Educacion>(this.ulrBase+"/"+"editar",edu);
   }
   
   deleteEdu(id:number):Observable<Educacion>{
     return this.http.delete<Educacion>(this.ulrBase+"/"+"eliminar"+"/"+id);
   }

}
