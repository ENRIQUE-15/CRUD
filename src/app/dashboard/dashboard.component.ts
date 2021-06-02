import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import msg from 'sweetalert2';        

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('cierramodal', {static: false}) cierramodal; 

  scuenta = "";
  snombre = "";
  spaterno = "";
  smaterno = "";


  mensaje = "";
  
  alumnos: string [] = ["Juan","Pedro","Rocio","Carlos","Tania","Daniel","Mario","Roxana"];

  alumnosN: any;
  alumnos2: any;

  constructor(
    public ruta: Router
  ) { 

  }

  ngOnInit() {
    var usu = localStorage.getItem('usu');
    if (usu != null){
      this.mensaje = usu;
      this.llenaralumnos();

      this.alumnos2 = this.alumnosN;
    }
    else{
      this.ruta.navigate(['/login']);
    }
  }  

  

  llenaralumnos(){
    var arr = [];
    arr.push({ cuenta: "1/2021", nombre:"Juan",  paterno:"Sanchez",  materno:"Colin" });
    arr.push({ cuenta: "2/2021", nombre:"Pedro",  paterno:"Solis",  materno:"Fuentes" });
    arr.push({ cuenta: "3/2021", nombre:"Carlos",  paterno:"Fuentes",  materno:"Ortiz" });
    arr.push({ cuenta: "4/2021", nombre:"Saul",  paterno:"Hernández",  materno:"Gonzales" });
    arr.push({ cuenta: "5/2021", nombre:"Fernanda",  paterno:"Martínez",  materno:"Martínez" });
    this.alumnosN = arr;
  }


  editar(itm:any){   
    this.scuenta = itm.cuenta;
    this.snombre = itm.nombre;
    this.spaterno = itm.paterno;
    this.smaterno = itm.materno;
  }

  guardar(){      
    if (this.snombre == ""){
      msg.fire("Proporcione el nombre del alumno","","warning");  
      return;
    }
    if (this.spaterno == ""){
      msg.fire("Proporcione el apellido paterno del alumno","","warning");  
      return;
    }
    if (this.smaterno == ""){
      msg.fire("Proporcione el apellido materno del alumno","","warning");  
      return;
    }

    if (this.scuenta == ""){
      //Nuevo
      this.alumnosN.push({ 
        cuenta:  ((this.alumnosN.length)+1).toString() + "/2021", 
        nombre: this.snombre,
        paterno: this.spaterno,
        materno: this.smaterno,
      });  
    }
    else{
      //Edición
      var objIndex = this.alumnosN.findIndex(((itm :any) => itm.cuenta == this.scuenta));    
      this.alumnosN[objIndex].nombre = this.snombre;
      this.alumnosN[objIndex].paterno = this.spaterno;
      this.alumnosN[objIndex].materno = this.smaterno;
    }
    //document.getElementById('cierramodal').click();              
    this.cierramodal.nativeElement.click();        
  }

  eliminar(itm1:any){
    if (window.confirm("Desea eliminar el registro?")) {
      var objIndex = this.alumnosN.findIndex(((itm :any) => itm.cuenta == itm1.cuenta));    
      this.alumnosN.splice(objIndex, 1) 
    }
  }

  nuevo(){
    this.scuenta = "";
    this.snombre = "";
    this.spaterno = "";
    this.smaterno = "";
  }

}