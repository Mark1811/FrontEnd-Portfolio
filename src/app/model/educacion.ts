 export class Educacion {
       id:number;
       nombreInstitu:string;
       nombreTitulo:string;
       fecha_inicio:string;
       fecha_fin:string;
       logoInstitu:string;
       modalEdit:boolean;
       modalAlert:boolean;

       constructor(id:number,nombreInstitu:string,nombreTitulo:string,fecha_inicio:string,fecha_fin:string,logoInstitu:string,modalEdit:boolean,modalAlert:boolean){
        this.id=id;
        this.nombreInstitu=nombreInstitu;
        this.nombreTitulo=nombreTitulo;
        this.fecha_inicio=fecha_inicio;
        this.fecha_fin=fecha_fin;
        this.logoInstitu=logoInstitu;
        this.modalEdit=modalEdit;
        this.modalAlert=modalAlert;
       
 }

}