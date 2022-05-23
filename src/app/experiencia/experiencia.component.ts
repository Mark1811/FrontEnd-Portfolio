import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Experiencia } from '../model/experiencia';
import { ExperienciaServiceService } from '../servicios/experiencia-service.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css','./modalExpe.css','./modalAlerTStyle.css']
})
export class ExperienciaComponent implements OnInit {
     
     experi:any;
     suscription:Subscription;
     id:number;
     capTitluPuesto:string;
     capFechaInicio:string;
     capAnioIni:string;
     capFechaFin:string;
     capAnioFin:string;
     capDescripcionPuesto:string;
     capLogoEmpresa:any;
     abrirModal:boolean=false;
     abri2:boolean=false;
     abriAler:boolean=false;
     nameimg:any;
    
    constructor(private expeService: ExperienciaServiceService) {}

  ngOnInit(): void {
    this.expeService.getExpe().subscribe(data=>{
      this.experi=data;
    })
     this.suscription= this.expeService.refresh$.subscribe(()=>{
      this.expeService.getExpe().subscribe(data=>{
        this.experi=data;
      })
     })
  }
   //Metodo para pasar El logo a base64
   convertirBs64(event:any){
    const archiImg = event.target.files;
    this.nameimg= event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(archiImg[0]);
    reader.onloadend=()=>{
        try{
          this.capLogoEmpresa=reader.result;
        }
        catch{
          console.log("Error Base64");
        }  
    } 
  }


  //Metodo para crear experiencia//
     agregarExpe(){
     
         let nuevaExpe = new Experiencia(this.experi.length,this.capTitluPuesto,this.capFechaInicio+" "+ this.capAnioIni,this.capFechaFin+" "+ this.capAnioFin ,this.capDescripcionPuesto,this.capLogoEmpresa,false,false);
         if(this.capAnioIni > this.capAnioFin){
          alert("error en la fecha");
        }
        else{
          this.expeService.createExpe(nuevaExpe).subscribe();
          this.abrirModal=false;
         
        }
       
     }

   //metodo para abrir modal
   abriModalExpe(){
      this.abrirModal=true;
      this.capTitluPuesto="";
      this.capFechaInicio="";
      this.capAnioIni="";
      this.capFechaFin="";
      this.capAnioFin="";
      this.capLogoEmpresa="";
      this.capDescripcionPuesto="";
   }
   //cerrar modal
   alertExit(){
     this.abrirModal=false;
   }
   // metodo para guardar un exeriencia editada
   saveExper(elem:Experiencia){
     elem.puesto=this.capTitluPuesto;
     elem.fecha_inicio= this.capFechaInicio + " " + this.capAnioIni;
     elem.fecha_fin= this.capFechaFin + " " + this.capAnioFin;
     elem.descrip_Expe=this.capDescripcionPuesto;
     elem.logoEmpresa= this.capLogoEmpresa;
     if(this.capAnioIni > this.capAnioFin){
      alert("error en la fecha");
    }else{
      this.expeService.editExpe(elem).subscribe();
      elem.modalEdit=false;
    }
    

      } 

   abrirEdit(ex:Experiencia){
    ex.modalEdit=!ex.modalEdit;
    this.capTitluPuesto=ex.puesto;
    this.capFechaInicio = ex.fecha_inicio.slice(0,3);
    this.capAnioIni= ex.fecha_inicio.slice(4,8);
    this.capFechaFin= ex.fecha_fin.slice(0,3);
    this.capAnioFin= ex.fecha_fin.slice(4,8);
    this.capLogoEmpresa= ex.logoEmpresa;
    this.capDescripcionPuesto=ex.descrip_Expe;
   }

   abrirAlert(elem:Experiencia){
    elem.modalAlert=!elem.modalAlert;
    this.capTitluPuesto= elem.puesto;
   }

   //metodo para eliminar experiencia
   deleteExperi(e:Experiencia){
     this.expeService.deleteExpe(e.id).subscribe(
      res=> this.expeService.getExpe().subscribe(
        response => this.experi= response
      )
    );
   }
   exitAlert(closeAlert:Experiencia){
     closeAlert.modalAlert=false;

   }


}
