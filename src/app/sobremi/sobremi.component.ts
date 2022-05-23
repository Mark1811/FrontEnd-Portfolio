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
 
  sobremi:any;
  habiliModalSobremi:boolean=false;
  forms:FormGroup;
  id:number; 
  nameimg:any;
  captImg:any;
 

  constructor(private datosSobremiService:SobreserviceService,private formsBuilder: FormBuilder ) { 
    this.forms=this.formsBuilder.group({
        descripcion:['',[Validators.required,Validators.maxLength(200)]],
        foto:['',[]]
    })
  }
 
  
  ngOnInit(): void {
    this.getSobremi();
    
  }

  getSobremi(){
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
   
  get Descripcion(){
    return this.forms.get('descripcion');
  }

  get DescripcionValid(){
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }

  /*Metodo para abrir modal*/
  abrirModal(id:number){
    
         this.habiliModalSobremi=true;
         this.datosSobremiService.getMostraId(id).subscribe(res=>{
         const {idsobremi,descripcion,foto}= res
         this.id=idsobremi;
         this.forms.setValue({descripcion,foto})
        })
  }
  
  /* Metodo para editar la foto y descripcion*/ 
  editCapt(event:Event){
    event.preventDefault;
    if(this.forms.valid){
      let obj = this.forms.value;
      obj.idsobremi = this.id;
      obj.foto = this.captImg;
      this.datosSobremiService.editDescripcion(obj).subscribe(()=>{
        this.getSobremi()
      });
     this.habiliModalSobremi= false;
    }else{
      this.forms.markAllAsTouched();
    }
  
  }

  exitAlert(){
    this.habiliModalSobremi=false;
  }
}