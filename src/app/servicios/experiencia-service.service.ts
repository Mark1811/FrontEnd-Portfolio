import { Injectable } from '@angular/core';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaServiceService {

  constructor() { }

  ListExpe:Experiencia[]=[];

  agregarExpe(expe:Experiencia){
    this.ListExpe.push(expe);
  }
}
