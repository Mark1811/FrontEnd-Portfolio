import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { SobreserviceService } from '../servicios/sobreservice.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  sobremi:any;
  myimage: Observable<any>;
  nameimg:any;
  habiliModalSobremi:boolean=true;
  descrip:string="marcos";
  constructor(private datosSobremi:SobreserviceService) { }
 
  
  ngOnInit(): void {
    
    this.datosSobremi.getSobremi().subscribe(data =>{
      console.log(data);
      this.sobremi= data; 
    })
  }
  
  capturarImg(event:any){
     const obtenerdato = event.target.files[0];
     this.convertToBase64(obtenerdato);
     this.nameimg= event.target.files[0].name;
  }
   


  /*METODO PARA PASAR LA IMAGEN A BASE64*/ 
  convertToBase64(file: File) {
    this.myimage = new Observable((subscriber:Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
}




