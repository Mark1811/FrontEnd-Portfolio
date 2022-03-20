export class Experiencia {
     id:number=0;
     titluPuesto:string;
     fechaInicio:number;
     fechaFin:number;
     descripcionPuesto:string;
     logoEmpresa:string;
      
     constructor(id:number,tituloPuesto:string,fechaInicio:number,fechaFin:number,descripiPuesto:string,logoEmpresa:string){
            this.id=id;
            this.titluPuesto=tituloPuesto;
            this.fechaInicio=fechaInicio;
            this.fechaFin=fechaFin;
            this.descripcionPuesto=descripiPuesto;
            this.logoEmpresa=logoEmpresa;
     }


}