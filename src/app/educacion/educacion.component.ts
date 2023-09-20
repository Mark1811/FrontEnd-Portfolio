import { Component, OnInit } from '@angular/core';
import {TextEducacion} from '../utils/parrafos';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
   textEducacion:any = TextEducacion;

  constructor() { }

  ngOnInit(): void {
      }
  

}



