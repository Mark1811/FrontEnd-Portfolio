import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Sobremi } from '../model/sobremi';
import { SobreserviceService } from '../servicios/sobreservice.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  sobremi:any;
  per:Sobremi[]=[];
  myimage: Observable<any>;
  nameimg:any;
  habiliModalSobremi:boolean=true;
  captSobremi:string="";
  captImg:any;
  constructor(private datosSobremiService:SobreserviceService) { }
 
  
  ngOnInit(): void {
    
    this.datosSobremiService.getSobremi().subscribe(data =>{
      console.log(data);
      this.sobremi= data; 
    })
  }
  
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
   

  editCapt(per:Sobremi){
    per.descripcion=this.captSobremi;
    per.foto=this.captImg;
    this.datosSobremiService.editDescripcion(per).subscribe();
    this.habiliModalSobremi=false;
  }


  /*METODO PARA PASAR LA IMAGEN A BASE64 
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
  */
}




