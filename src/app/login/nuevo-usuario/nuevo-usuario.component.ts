import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  form: FormGroup;
  loginValid = false;
  loginFail= false;
  errorMsj:string;

  constructor(private formsBuilder: FormBuilder, private loginService:LoginServiceService, 
    private ruta:Router, private tokenService:TokenService ) { 
    
    this.form= this.formsBuilder.group({
      nombreUsuario:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.loginValid=true;
      this.loginFail=false;
    }
  }

  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
    this.loginService.iniciarSesion(this.form.value).subscribe(
      data=>{
       this.loginValid= true;
       this.loginFail=false;
       this.tokenService.setToken(data.token);
       this.tokenService.setUserName(data.nombreUsuario);
       this.tokenService.setAuthorities(data.authorities);
       this.ruta.navigate(['/portfolio']);
    },
    err =>{
      this.loginValid=false;
      this.loginFail=true;
    }
    
    );
  }
  else{
    this.form.markAllAsTouched();
  }
}

  //Validacion de Login
  get Usuario(){
    return this.form.get('nombreUsuario');
  }

  get Pass(){
    return this.form.get('password');
  }

  get NombreValid(){
    return this.Usuario?.touched && !this.Usuario?.valid;
  }

  get PassValid(){
    return this.Pass?.touched && !this.Pass?.valid;
  }

}
