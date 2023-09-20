import { Component, OnInit } from '@angular/core';
import {TextExperiencia} from '../utils/parrafos';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css', './modalExpe.css', './modalAlerTStyle.css']
})
export class ExperienciaComponent implements OnInit {
   textExperiencia:any = TextExperiencia;

  constructor() { }

  ngOnInit(): void {
  }


}
