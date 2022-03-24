export class Experiencia {
     id:number;
     puesto:string;
     fecha_inicio:string;
     fecha_fin:string;
     descrip_Expe:string;
     logoEmpresa:string;
     modalEdit:boolean;
     modalAlert:boolean;
      
     constructor(id:number,puesto:string,  fecha_inicio:any,fecha_fin:any,descrip_Expe:string,logoEmpresa:string,modalEdit:boolean,modalAlert:boolean){
            this.id=id;
            this.puesto=puesto;
            this.fecha_inicio=fecha_inicio;
            this.fecha_fin=fecha_fin;
            this.descrip_Expe=descrip_Expe;
            this.logoEmpresa=logoEmpresa;
            this.modalEdit=modalEdit;
            this.modalAlert=modalAlert;
           
     }


}