import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Educacion } from '../model/educacion';
import { EducacionServiceService } from '../servicios/educacion-service.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css','./modalEducacion.css','./modalAlertEdu.css']
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
  modalEdit:boolean;
  modalAlert:boolean;

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
  
  abriModalEdu(){
    this.abriModal=true;
    this.nombreInstitu="";
    this.nombreTitulo="";
    this.fecha_inicio="";
    this.anioInicio="";
    this.fecha_fin="";
    this.anioFin="";
   
  }
  agregarEdu(){
      if(this.anioInicio > this.anioFin){
        alert("No se puede elegir un año mayor al de finalizacion");
      }
      else{
      let nuevaEstudio = new Educacion(this.id,this.nombreInstitu,this.nombreTitulo,this.fecha_inicio+" "+this.anioInicio,
      this.fecha_fin+" "+this.anioFin,this.logoInstitu,false,false);
      this.educaService.crearEdu(nuevaEstudio).subscribe();
        this.abriModal=false;
      }
      
  }

  saveEdit(edu:Educacion){
    edu.nombreInstitu= this.nombreInstitu;
    edu.nombreTitulo= this.nombreTitulo;
    edu.fecha_inicio=this.fecha_inicio+" "+this.anioInicio;
    edu.fecha_fin= this.fecha_fin+" "+this.anioFin;
    this.educaService.editEdu(edu).subscribe();
    edu.modalEdit=false;
  }


  editEduca(edu:Educacion){
    edu.modalEdit=!edu.modalEdit;
    this.nombreInstitu= edu.nombreInstitu;
    this.nombreTitulo= edu.nombreTitulo;
    this.fecha_inicio= edu.fecha_inicio.slice(0,3);
    this.anioInicio= edu.fecha_inicio.slice(4,8);
    this.fecha_fin=edu.fecha_fin.slice(0,3);
    this.anioFin=edu.fecha_fin.slice(4,8);
  
  }

  elimiEduca(edu:Educacion){
    this.educaService.deleteEdu(edu.id).subscribe(
      res=> this.educaService.getEdu().subscribe(
        response=> this.educacioData=response
      )
    )
  }

  abriAlert(edu:Educacion){
      edu.modalAlert=!edu.modalAlert;
      this.nombreTitulo=edu.nombreTitulo;
  }
  exitEdu(edu:Educacion){
    edu.modalAlert=false;
  }

}



