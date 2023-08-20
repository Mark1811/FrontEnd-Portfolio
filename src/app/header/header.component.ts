import { Component, OnInit } from '@angular/core';
import { PortadaPersona } from '../model/portada-persona';
import { PortadaService } from '../servicios/portada.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./menu.css']
})
export class HeaderComponent implements OnInit {
  persona:PortadaPersona[]=[];
  habilitarPort:Boolean;
  form: UntypedFormGroup;
  id:number;
  


  constructor(private portadaservice:PortadaService, private formsBuilder: UntypedFormBuilder,private ruta:Router){
    this.form= this.formsBuilder.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      area:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
     this.getPersona();
    
  }
  
  onLogin(){
       this.ruta.navigate(['']);
  }


  getPersona(){
    this.portadaservice.getPersona().subscribe(per=>this.persona=per);
  }

  clickEditar(id:number){
    this.habilitarPort=true;
    this.portadaservice.getPerId(id).subscribe(res=>{
      const {id,nombre,apellido,area}= res
       this.id= id;
      this.form.setValue({nombre,apellido,area})
    })
  }

  //Validaciones del formularios
 get Nombre(){
   return this.form.get('nombre');
 }

 get Apellido(){
   return this.form.get('apellido');
 }

 get NombreValid(){
   return this.Nombre?.touched && !this.Nombre?.valid;
 }
 get ApellidoValid(){
   return this.Apellido?.touched && !this.Apellido?.valid;
 }

 onEnviar(event: Event){
  // Detenemos la propagación o ejecución del compotamiento submit de un form
  event.preventDefault;

  if (this.form.valid){
    let obj = this.form.value;
    obj.id = this.id;
    this.portadaservice.editarPersona(obj).subscribe(()=>{
     this.getPersona()
    });
    this.habilitarPort=false;
  }else{
   // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    this.form.markAllAsTouched();
  }

}
exitAlert(){
  this.habilitarPort=false;
}

}
