import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import msg from 'sweetalert2';    

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent implements OnInit {
  @ViewChild ('cierramodal', {static: false}) cierramodal; 
  mensaje = "";
  profesores:any;
  
  dnombre= "";
  dpaterno= "";
  dmaterno= "";
  scelular = "";
  scorreo = "";
  drfc = "";
  
  constructor(
    public ruta: Router
  ) { }

  ngOnInit() {
    var usu = localStorage.getItem('usu');
    if (usu != null){
      this.mensaje = usu;
      this.llenarprofesores();      
    }
    else{
      this.ruta.navigate(['/login']);
    }
  }  

  llenarprofesores(){
    var arr = [];
    arr.push({ rfc: "RFC1", nombre:"Daniel",  paterno:"Hernandez",  materno:"Gonzales ", email:"daniel@gmail.com ",celular:"55782426" });    
    arr.push({ rfc: "RFC2", nombre:"Juan",  paterno:"Benitez",  materno:"Samora", email:"Juan78@hotmail.com",celular:"52536489" });    
    arr.push({ rfc: "RFC3", nombre:"Sandra",  paterno:"Gonzales",  materno:"Sanchez", email:"sandra2ad@gmail.com",celular:"55816045" });    
    arr.push({ rfc: "RFC4", nombre:"Pedro",  paterno:"Aguirre",  materno:"Guzmán", email:"pedro47s@hotmail.com",celular:"55923456" });    
    arr.push({ rfc: "RFC5", nombre:"Jose ",  paterno:"Diaz",  materno:"Martinez", email:"jose548@hotmail.com",celular:"53486524" });    
    this.profesores = arr;
  }

  editar(itm:any){   
    this.scelular = itm.celular;
    this.scorreo = itm.correo;

  }

  guardar(){      
    if (this.dnombre == ""){
      msg.fire("Proporcione el nombre del alumno","","warning");  
      return;
    }
    if (this.dpaterno == ""){
      msg.fire("Proporcione el apellido paterno del alumno","","warning");  
      return;
    }
    if (this.dmaterno == ""){
      msg.fire("Proporcione el apellido materno del alumno","","warning");  
      return;
    }

    if (this.drfc == ""){
      //Nuevo
      this.profesores.push({ 
        cuenta:  ((this.profesores.length)+1).toString() + "/2021", 
        nombre: this.dnombre,
        paterno: this.dpaterno,
        materno: this.dmaterno,
      });  
    }
    else{
      //Edición
      var objIndex = this.profesores.findIndex(((itm :any) => itm.rfc == this.drfc));    
      this.profesores[objIndex].nombre = this.dnombre;
      this.profesores[objIndex].paterno = this.dpaterno;
      this.profesores[objIndex].materno = this.dmaterno;
    }
    //document.getElementById('cierramodal').click();              
    this.cierramodal.nativeElement.click();        
  }


  eliminar(itm1:any){
    if (window.confirm("Desea eliminar el registro?")) {
      var objIndex = this.profesores.findIndex(((itm :any) => itm.cuenta == itm1.cuenta));    
      this.profesores.splice(objIndex, 1) 
    }
  }

  nuevo(){
    this.drfc = "";
    this.dnombre = "";
    this.dpaterno = "";
    this.dmaterno = "";
  }


}
  










