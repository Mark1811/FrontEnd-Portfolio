import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private formsBuilder: FormBuilder, private loginService:LoginServiceService, 
    private ruta:Router, private tokenService:TokenService ) { 
    
    this.form= this.formsBuilder.group({
      nombreUsuario:['',[]],
      password:['',[]]
    })
  }

  ngOnInit(): void {
  }

  onEnviar(event:Event){
    event.preventDefault;
    this.loginService.iniciarSesion(this.form.value).subscribe(data=>{
       this.tokenService.setToken(data.token);
       this.tokenService.setUserName(data.nombreUsuario);
       this.tokenService.setAuthorities(data.authorities);
       this.ruta.navigate(['/portfolio'])
    })
  }

}
