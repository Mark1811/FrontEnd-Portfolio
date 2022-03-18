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
  habilitarPort:Boolean=true;
  nombre:string=" ";
  apellido:string=" ";
  area:string="";
  constructor(private portadaservice:PortadaService){

  }

  ngOnInit(): void {
    this.portadaservice.getPersona().subscribe(
      per=>this.persona=per
    );
  }

 

}
