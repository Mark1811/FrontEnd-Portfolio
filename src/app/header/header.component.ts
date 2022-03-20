import { Component, OnInit } from '@angular/core';
import { PortadaPersona } from '../model/portada-persona';
import { PortadaService } from '../servicios/portada.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./menu.css']
})
export class HeaderComponent implements OnInit {
  
  persona:PortadaPersona[]=[];
  habilitarPort:Boolean=false;
  nombre:string=" ";
  apellido:string=" ";
  area:string=" ";
  constructor(private portadaservice:PortadaService){}

  ngOnInit(): void {
    this.portadaservice.getPersona().subscribe(per=>this.persona=per);
  }
  
  editPortada(per:PortadaPersona){
    per.nombre = this.nombre;
    per.apellido= this.apellido;
    per.area = this.area;
    this.portadaservice.editarPersona(per).subscribe();
    this.habilitarPort=false;
  }

  clickEditar(perso:PortadaPersona){
    this.habilitarPort=true;
    this.nombre=perso.nombre;
    this.apellido=perso.apellido;
    this.area=perso.area;
  }

 

}
