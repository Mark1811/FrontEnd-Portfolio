import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { ExperienciaServiceService } from '../servicios/experiencia-service.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
     id:number=0;
     titluPuesto:string="Trabalo 2";
     fechaInicio:number=11/23/2000;
     fechaFin:number=1/34/2021;
     descripcionPuesto:string="era un desarrollo del area informatica desde el comienzo";
     logoEmpresa:string=" ";
     expeGrup:Experiencia[]=[];


  constructor(private expeService: ExperienciaServiceService) {
    this.expeGrup=this.expeService.ListExpe;
   }

  ngOnInit(): void {
 
  }

  agregaExperi(){
    let nueva = new Experiencia(this.expeGrup.length+1,this.titluPuesto,this.fechaInicio,this.fechaFin,this.descripcionPuesto,this.logoEmpresa);
    this.expeService.agregarExpe(nueva);
  }


}
