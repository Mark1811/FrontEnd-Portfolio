import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Sobremi } from '../model/sobremi';
import { SobreserviceService } from '../servicios/sobreservice.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
 
  sobremi:Sobremi[]=[];
  habiliModalSobremi:boolean=false;
  forms:FormGroup;
  id:number; 
  nameimg:any;
  captImg:any;
 
 /*
  sobremi:any;
  myimage: Observable<any>;
  nameimg:any;
  habiliModalSobremi:boolean=false;
  captSobremi:string=" ";
  captImg:any;
  */
  constructor(private datosSobremiService:SobreserviceService,private formsBuilder: FormBuilder ) { 
    this.forms=this.formsBuilder.group({
        descripcion:['',[]],
        archivo:['',[]]
    })
  }
 
  
  ngOnInit(): void {
    
    this.datosSobremiService.getSobremi().subscribe(data =>{
      this.sobremi= data; 
    })
  }

  //Metodo para pasar las imagenes a Base64
  convertirBs64(event:any){
    const archiImg = event.target.files;
    this.nameimg= event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(archiImg[0]);
    reader.onloadend=()=>{
        try{
          this.captImg=reader.result;
        }
        catch{
          console.log("Error Base64");
        }  
    } 
  }
   
  /* Metodo para editar la foto y descripcion*/ 
  editCapt(persona:Sobremi){
    persona.descripcion=this.captSobremi;
    persona.foto=this.captImg;
    this.datosSobremiService.editDescripcion(persona).subscribe();
    this.habiliModalSobremi=false;
  }

  /*Metodo para abrir modal*/
  abrirModal(per:Sobremi){
        this.habiliModalSobremi=true;
        this.captImg=per.foto;
        this.captSobremi=per.descripcion;
  }
}




