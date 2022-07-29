import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Experiencia } from '../model/experiencia';
import {tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ExperienciaServiceService {
 
  private ulrMost:string="https://portfolio-back-marcos.herokuapp.com/expe/mostrar";
  private ulrCrea:string="https://portfolio-back-marcos.herokuapp.com/expe/crear";
  private ulrEdit:string="https://portfolio-back-marcos.herokuapp.com/expe/editar";
  private ulrDelete:string="https://portfolio-back-marcos.herokuapp.com/expe/eliminar";
  private _refresh$ = new Subject<void>()
  constructor(private http:HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }
  
 //Get mostrar experiencia
  getExpe():Observable<any>{
    return this.http.get(this.ulrMost);
  }

  createExpe(desc:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(this.ulrCrea,desc)
    .pipe(
      tap(()=>{
        this._refresh$.next(); // metodo para atualizar la àgina antes de que guarde
      })
    )
  }

  editExpe(ex:Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>(this.ulrEdit,ex);
  }

  deleteExpe(id:any):Observable<Experiencia>{
    return this.http.delete<Experiencia>(this.ulrDelete +'/'+ id);
  }
}
