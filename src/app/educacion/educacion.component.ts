import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Educacion } from '../model/educacion';
import { EducacionServiceService } from '../servicios/educacion-service.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css','./modalEducacion.css']
})
export class EducacionComponent implements OnInit {
   
  suscription:Subscription;
  educacioData:Educacion[];
  abriModal:boolean=false;

    id:number;
    nombreInstitu:string;
    nombreTitulo:string;
    fecha_inicio:string;
    anioInicio:string;
    fecha_fin:string;
    anioFin:string;
    logoInstitu:string;
    modalEdit:false;
    modalAlert:false;

  

  constructor(private educaService:EducacionServiceService) { }

  ngOnInit(): void {
       this.educaService.getEdu().subscribe(data=>{
          this.educacioData= data;
        })
        this.suscription= this.educaService.refresh$.subscribe(()=>{
          this.educaService.getEdu().subscribe(data=>{
            this.educacioData=data;
          })
         })
        
  }
  
  abriModalExpe(){
    this.abriModal=true;
   
  }
  agregarEdu(){
      if(this.anioInicio > this.anioFin){
        alert("No se puede elegir un año mayor al de finalizacion");
      }
      else{
      let nuevaEstudio = new Educacion(this.id,this.nombreInstitu,this.nombreTitulo,this.fecha_inicio+" "+this.anioInicio,
      this.fecha_fin+" "+this.anioFin,this.logoInstitu,false,false);
      this.educaService.crearEdu(nuevaEstudio).subscribe();
      console.log(this.fecha_inicio);
        this.abriModal=false;
      }
      
  }

}
