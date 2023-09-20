import { Component, OnInit } from '@angular/core';
import { TextSobremi } from '../utils/parrafos';
@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  
  text:string = TextSobremi.sombreMi;
  constructor() {
  }
 
  ngOnInit(): void {
    
  }
}