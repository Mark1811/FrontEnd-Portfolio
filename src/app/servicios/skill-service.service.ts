import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class SkillServiceService {
   private urlBase:string="https://portfolio-back-marcos.herokuapp.com/skill"
   private _refresh$ = new Subject< void >()

  constructor(private http:HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }

  //mostrar Skill
  getSkill():Observable<any>{
    return this.http.get(this.urlBase+"/"+"mostrar")
  }
}
